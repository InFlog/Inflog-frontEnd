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
import search from './components/search';
import SearchInfluencer from './components/SearchInfluencer';
import PersonalPageBrand from './components/PersonalPageBrand';
import UpdateFormBrand from './components/UpdateFormBrand';
import UpdateFormNewBrand from './components/UpdateFormNewBrand';
import DisplayBrand from './components/DisplayBrand';
import DisplayInfluencer from './components/DisplayInfluencer';
import BrandCategories from './components/BrandCategories';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Onboarding} />
          <Route path="/login" component={LoginForm} />
          <Route path="/profile" component={PersonalPageInfluencer} />
          <Route path="/UpdateForm" component={UpdateForm} />
          <Route path="/UpdateFormBrand" component={UpdateFormNewBrand} />
          <Route path="/brandregister" component={RegisterFormBrand} />
          <Route path="/influencerregister" component={RegisterFormInfluencer} />
          <Route path="/personalpageInfluencer" component={PersonalPageInfluencer} />
          <Route path="/personalpageBrand" component={PersonalPageBrand} />
          <Route path="/menu" component={Menu} />
          <Route path="/FeedPage" component={FeedPage} />
          <Route path="/search" component={search} />
          <Route path="/SearchInfluencer" component={SearchInfluencer} />
          <Route path="/DisplayBrand" component={DisplayBrand} />
          <Route path="/displayInfluencer" component={DisplayInfluencer} />
          <Route path="/BrandCategories" component={BrandCategories} />

        </Switch>

      </div>
    </Router>

  );
}


export default App;