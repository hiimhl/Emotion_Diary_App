import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

import { emotionList } from "../util/emotion";
import { getStringDate } from "../util/date";

function Diary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const diaryLsit = useContext(DiaryStateContext);
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    // head tag안에 있는 title
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryLsit.length >= 1) {
      const targetDiary = diaryLsit.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        //일기가 존재할 때
        setData(targetDiary);
      } else {
        alert("일기가 존재하지 않습니다!");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryLsit]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 일기`}
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={`diary_img_wrapper diary_img_wrapper_${data.emotion}`}
            >
              <img alt="emtion" src={curEmotionData.emotion_img} />
              <span>{curEmotionData.emotion_descript}</span>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default Diary;
