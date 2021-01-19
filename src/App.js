import React from 'react';
import "../src/App.css";
import 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from './components/Onboarding';
import LoginForm from './components/LoginForm';
import RegisterFormInfluencer from './components/RegisterFormInfluencer';
import RegisterFormBrand from './components/RegisterFormBrand';
import PersonalPageInfluencer from './components/PersonalPageInfluencer';
import UpdateForm from './components/UpdateForm';
import Menu from './components/Menu';
import FeedPage from './components/FeedPage';



function App() {
  return ( 
    <Router>
      <div className="App">
    
      
              <Switch>
                <Route path="/" exact component={Onboarding}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/profile" component={PersonalPageInfluencer}/>
                <Route path="/UpdateForm" component={UpdateForm}/>
                <Route path="/brandregister" component={RegisterFormBrand}/>
                <Route path="/influencerregister" component={RegisterFormInfluencer}/>
                <Route path="/personalpage" component={PersonalPageInfluencer}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/FeedPage" component={FeedPage}/> 
              
           
              </Switch>

      </div>
         </Router>  
        
  );
}






export default App;