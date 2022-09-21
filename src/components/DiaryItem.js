import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { DiaryDispatchContext } from "../App";

function DiaryItem({ id, emotion, content, date }) {
  const navigate = useNavigate();
  const { onRemove } = useContext(DiaryDispatchContext);

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || ""; //밑의 src로 이미지가 안나온다면 작성할 것.

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(id);
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={`emotion_img_wrapper emotion_img_wrapper_${emotion}`}
      >
        <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <span className="diary_date">{strDate}</span>
        <span className="diary_content_preview">{content.slice(0, 25)}</span>
      </div>
      <div className="btn_wrapper">
        <MyButton
          className={"btn_wrapper_btn"}
          onClick={goEdit}
          text={"수정하기"}
        />
        <MyButton onClick={handleRemove} text={"삭제하기"} type={"negative"} />
      </div>
    </div>
  );
}

export default React.memo(DiaryItem);
