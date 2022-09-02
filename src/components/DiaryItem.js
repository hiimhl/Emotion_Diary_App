import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

function DiaryItem({ id, emotion, content, date }) {
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || ""; //밑의 src로 이미지가 안나온다면 작성할 것.

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div className={`emotion_img_wrapper emotion_img_wrapper_${emotion}`}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <span className="diary_date">{strDate}</span>
        <span className="diary_content_preview">{content.slice(0, 25)}</span>
      </div>
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
}

export default DiaryItem;
