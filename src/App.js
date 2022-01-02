import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AboutMain from "./Pages/About/AboutMain/AboutMain";
import HomeMain from "./Pages/Home/HomeMain/HomeMain";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeMain/>} />
        <Route path='/about' element={<AboutMain/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
