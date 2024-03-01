// import Menu from "./components/Menu";
// import Header from "./components/Header";
// import Choose from "./components/Choose";
// // import Explore from "./components/Explore";
// import Trainer from "./components/Trainer";
// import Testimonial from "./components/Testimonial";
// import Discount from "./components/Discount";
// import Footer from "./components/Footer";
// import "./App.css";
import Main from "./components/main";
// import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path='/'exact index element={<Main/>}></Route>
      <Route path='/login'exact index element={<Login/>}></Route>
      <Route path='/signup' exact index element={<Register/>}></Route> 
      </Routes> 
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
