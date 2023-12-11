import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Model from "./components/Model";
import TryNow from "./components/Try-Now";
import Explore from "./components/Explore";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/model" element={<Model></Model>} />
          <Route path="/try-now" element={<TryNow></TryNow>} />
          <Route path="/explore" element={<Explore></Explore>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
