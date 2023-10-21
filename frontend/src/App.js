import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import PosPage from "./pages/POSPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/pos" element={<PosPage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/Signup" element={<SignupPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
