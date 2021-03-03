import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";

import Chat from "chat/Chat";

const App = () => (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <div className="container">
  <div className="row">
      <div className="col-4">
          <div class="main_div">
            <h3>Task Complete</h3>
            
            <p>You are finished!  Thank you for your contributions to science. You will be eligible for full payment once you answer the following questions.</p>
                <div class="main_div">
                  <form>
                        <div class="col-md-8">
                            On a scale of 1-10 (where 10 is the most engaged), please rate how <b>ENGAGED</b> you were while performing the task:
                        </div>
                        <div class="col-md-4">
                            <select id="engagement" name="engagement">
                                <option value="10">10 - Very engaged</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5" SELECTED>5 - Moderately engaged</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1 - Not engaged</option>
                            </select>
                        </div>
                        <div class="col-md-8">
                            On a scale of 1-10 (where 10 is the most difficult), please rate how <b>DIFFICULT</b> you found the learning task:
                        </div>
                        <div class="col-md-4">
                            <select id="difficulty" name="difficulty">
                                <option value="10">10 - Very difficult</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5" SELECTED>5 - Moderate</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1 - Very easy</option>
                            </select>
                        </div>
                      </form>
                </div>
       
              <div class="instructionsnav">
                    <div class="row">
                        <div class="col-xs-3">
                            <button type="button" id="submit-questionnaire" class="btn btn-primary btn-lg continue">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
     
          </div>


        <div className="col-8 border-left">
          {/* import Chat component */}
            <Chat />
          </div>
      </div>
  </div>
</>  
);

ReactDOM.render(<App />, document.getElementById("app"));
