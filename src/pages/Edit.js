import { useSearchParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id);
  console.log(mode);

  return (
    <div className="Edit">
      <h1>eidt</h1>
      <button //
        onClick={() => setSearchParams({ who: "hi" })}
      >
        QS 바꾸기
      </button>
      <button onClick={() => navigate("/home")}>home으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default Edit;
