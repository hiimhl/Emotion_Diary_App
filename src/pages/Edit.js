import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams(); //현재 페이지의 id를 확인
  const diaryList = useContext(DiaryStateContext);

  const [originData, setOriginData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    // head tag안에 있는 title
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        //해당 값이 true라면
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
        //잘못된 id 페이지로 오면 home으로
      }
    }
  }, [id, diaryList]);

  return (
    <div className="Edit">
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
}

export default Edit;
