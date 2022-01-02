import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMain from "./Pages/About/AboutMain/AboutMain";
import HomeMain from "./Pages/Home/HomeMain/HomeMain";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeMain/>} />
        <Route path='/about' element={<AboutMain/>} />
      </Routes>
      </BrowserRouter>
=======
      <HomeMain></HomeMain>
      <Footer></Footer>
>>>>>>> 688cf416cb961f6c1d38be2fd710e363078d7d6a
    </div>
  );
}

export default App;
