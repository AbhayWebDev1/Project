import React from "react";
import "./homepage.css";

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MernStack</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Homepage">Home <span class="sr-only">(current)</span></a>
      </li>
 
      <li class="nav-item">
        <a class="nav-link" href="/task">Task evaluation</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
       
      <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button> */}
    
        <div className="button" onClick={() => setLoginUser({})} >Logout</div> 
  
  </div>
</nav>

        </div>
    )
}

// const Homepage = ({setLoginUser}) => {
//   return (
//       <div className="homepage">
//           </navbar>
//           <div className="button" onClick={() => setLoginUser({})} >Logout</div>
//       </div>
//   )
// }

export default Homepage;