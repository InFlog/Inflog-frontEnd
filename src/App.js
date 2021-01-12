import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import "../src/App.css"



function App() {

    return ( 
      <div className="App">
              <LoginForm/>
              <RegisterForm/>
      </div>   
    );
}

export default App;