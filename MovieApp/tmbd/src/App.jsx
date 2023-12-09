import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import About from "./components/About";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-movies" element={<Movies />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
