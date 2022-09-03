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

export default EmotionItem;
