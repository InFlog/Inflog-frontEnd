import React from 'react'
import "../components/style.css"
import { Form} from 'react-bootstrap'; 
import { Button} from 'react-bootstrap'; 
import imge from "../generalloginImg.png";
import  {Link} from "react-router-dom";


class LoginForm extends React.Component { 
    render (){
    return (
        <div className="container">
            <div className="left">
                <div className="inner">

                    <div className="logo">Login</div>

                    <Form className="form-elem">
           
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="save password" />
                    </Form.Group>

                    <Link to="/profile">
                    <Button className="btn" variant="primary" type="login">
                        Login
                    </Button>
                    </Link> 
                     
              
               

                    <div className="registerLink">
                    <a href="/">do not have an account yet? Register</a>
                    </div>
                

                    </Form>
                    </div>
          
            </div>

        <div className="right">
     
        <img src={imge} className="imge" alt=""/>
        </div>
       
        </div>
    )
}
}

export default LoginForm;
