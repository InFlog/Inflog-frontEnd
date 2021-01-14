import React from 'react';
import "../src/App.css";
import 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from './components/Onboarding';
import LoginForm from './components/LoginForm';
import RegisterFormInfluencer from './components/RegisterFormInfluencer';
import RegisterFormBrand from './components/RegisterFormBrand';
import PersonalPageInfluencer from './components/PersonalPageInfluencer';



function App() {
  return ( 
    
    <Router>
      <div className="App">
     
              <Switch>
                <Route path="/" exact component={Onboarding}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/profile" component={PersonalPageInfluencer}/>
                <Route path="/brandregister" component={RegisterFormBrand}/>
                <Route path="/influencerregister" component={RegisterFormInfluencer}/>
                <Route path="/personalpage" component={PersonalPageInfluencer}/>
              </Switch>

      </div>
         </Router>  
        
  );
}





export default App;