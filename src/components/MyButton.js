//
function MyButton(props) {
  const btnType = ["positive", "negative"].includes(props.type)
    ? props.type
    : "default";
  //버튼의 타입이 지정된 타입이 아니라면 강제로 dufault로 변경

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`, `${props.className}`].join(
        " "
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
