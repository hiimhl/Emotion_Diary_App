import React from "react";

function EmotionItem({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) {
  return (
    <li
      onClick={() => onClick(emotion_id)}
      className={
        isSelected
          ? `EmotionItem EmotionItem_on_${emotion_id}`
          : `EmotionItem EmotionItem_off`
      }
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </li>
  );
}

export default React.memo(EmotionItem);
//prop으로 onClick같은 Fn이 오면 자동으로 랜더링됨??
//그래서 onClick을 따로 또 memo해줘야함.
