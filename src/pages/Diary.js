import { useParams } from "react-router-dom";

function Diary() {
  const { id } = useParams();
  return <div className="Diary">Diary</div>;
}

export default Diary;
