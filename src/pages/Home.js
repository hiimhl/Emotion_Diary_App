import { useState, useContext, useEffect } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";

//
function Home() {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    // head tag안에 있는 title
    titleElement.innerHTML = `감정 일기장`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        //해당 달의 1일
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date(
        //해당 달 + 1 해서 다음달로 넘기고 일은 0일
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59 // 날, 시간, 분, 초
      ).getTime();
      //시간을 사용할 때는 시, 분, 초까지 영향을 미치기 때문에 잘 확인할 것.

      //해당 달에 있는 일기만 출력되도록 필터링함.
      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  // MyButton
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div className="Home">
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default Home;
