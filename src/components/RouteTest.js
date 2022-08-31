import { Link } from "react-router-dom";
function RouteTest() {
  return (
    <div className="RouteTest">
      <Link to={"/"}>홈으로</Link>
      <br />
      <Link to={"/diary:id"}>다이어리</Link>
      <br />
      <Link to={"/edit"}>edit</Link>
      <br />
      <Link to={"/new"}>new</Link>
    </div>
  );
}

export default RouteTest;
