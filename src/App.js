import React from 'react';
import LoginForm from './components/LoginForm.js';
import RegisterFormInfluencer from './components/RegisterFormInfluencer';
import RegisterFormBrand from './components/RegisterFormBrand';
import "../src/App.css"
import Personalpage from './components/PersonalPageInfluencer';


function App() {

  return (
    <div className="App">
      {/* <RegisterFormInfluencer />
      <RegisterFormBrand />
      <Personalpage /> */}
      <LoginForm />

    </div>
  );
}

export default App;