import React from "react";
import  {Link} from "react-router-dom"
import "../components/style.css"
import onboardingImg from "../onboardingImg.png"


class Onboarding extends React.Component {
  
  render() {
    return (
      <div>
       
        <div className="onboarding-container">
            <div className="landing-text">
                <h1>InfLog</h1>
                <p>
                  Connecting you to your next brand deal
                </p>
            
              <Link to="/login">
              <button className="btn-onboarding">Login</button>
              </Link>
              <Link to="/login">
              </Link>
           
              <Link to="/brandregister">
              <button className="btn-onboarding">Register as a Brand</button>
              </Link>
           
              <Link to="/influencerregister">
              <button className="btn-onboarding">Register as an Influencer</button>
              </Link>    
            </div>

            <div className="landing-img">
              <img src={onboardingImg} alt=""/>
            </div>


        </div>
       
       
       
          
      </div>
    );
  }
}

export default Onboarding;