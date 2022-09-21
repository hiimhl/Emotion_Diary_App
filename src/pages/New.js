import DiaryEditor from "../components/DiaryEditor";
import { useEffect } from "react";

function New() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    // head tag안에 있는 title
    titleElement.innerHTML = `감정 일기장 - 새 일기 쓰기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
}

export default New;
