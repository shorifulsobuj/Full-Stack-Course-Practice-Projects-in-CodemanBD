import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
// import Home from "./assets/components/Home";
// import About from "./assets/components/About";
// import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer></Footer>
    </>
  );
}

export default App;
