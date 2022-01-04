import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import AboutMain from "./Pages/About/AboutMain/AboutMain";
import HomeMain from "./Pages/Home/HomeMain/HomeMain";

function App() {
  return (

      <AuthProvider>
            <BrowserRouter>
                <Routes>                  
                <Route path='/' element={<HomeMain/>} />
                <Route path='/about' element={<AboutMain/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
                </Routes>
          </BrowserRouter>
      </AuthProvider>

     
  

  );
}

export default App;
