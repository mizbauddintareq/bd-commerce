import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (

      <AuthProvider>
            <BrowserRouter>
                <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
                </Routes>
          </BrowserRouter>
      </AuthProvider>

     
  
  );
}

export default App;
