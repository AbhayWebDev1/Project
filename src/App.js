import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
        <Router>
          <Routes>

           {/* <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> :   
                                 <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}
            

          {/* <Route exact path="/" user  ? element={<Homepage setLoginUser={setLoginUser} />} : 
                                                        element={<Login setLoginUser={setLoginUser}/>} />   */}
                                                
          <Route exact path="/" element={<Homepage/>}/>  
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route exact path="/register" element={<Register/>}/>

          </Routes>
      </Router> 
      
      
    </div>
  );
}

export default App;