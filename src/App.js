import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App</h2>
        <MyButton
          text={"클릭하시오"}
          onClick={() => alert("클릭감지")}
          type={"positive"}
        />
        <MyButton
          text={"클릭하시오"}
          onClick={() => alert("클릭감지")}
          type={"negative"}
        />
        <MyButton
          text={"클릭하시오"}
          onClick={() => alert("클릭감지")}
          type={"dfdfdf"}
        />
        <img src={process.env.PUBLIC_URL + `./assets/emotion1.png`} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
