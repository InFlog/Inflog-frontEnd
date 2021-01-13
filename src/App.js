import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterFormInfluencer from './components/RegisterFormInfluencer';
import RegisterFormBrand from './components/RegisterFormBrand';
import "../src/App.css"



function App() {

    return ( 
      <div className="App">
              <RegisterFormInfluencer/>
              <RegisterFormBrand/>
              <LoginForm/>
              
      </div>   
    );
}

export default App;