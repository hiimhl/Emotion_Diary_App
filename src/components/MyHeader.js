//
function MyHeader(props) {
  return (
    <header>
      <div className="head_btn_left">{props.leftChild}</div>
      <div className="head_text">{props.headText}</div>
      <div className="head_btn_right">{props.rightChild}</div>
    </header>
  );
}

export default MyHeader;
