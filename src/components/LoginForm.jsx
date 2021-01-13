import React from 'react'
import "../components/style.css"
import { Form} from 'react-bootstrap'; 
import { Button} from 'react-bootstrap'; 
import { DropdownButton } from 'react-bootstrap'; 
import { Dropdown } from 'react-bootstrap'; 
import imge from "../loginImg.png";


export default function LoginFormIn() {
    return (
        <div className="container">
            <div className="left">
                <div className="inner">

                    <div className="logo">Login</div>

                    <Form className="form-elem">
           
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="save password" />
                    </Form.Group>

                    <Button className="btn" variant="primary" type="login">
                        Login
                    </Button>
                    
                    <div className="registerLink">
                    <a href="//example.com">do not have an account yet? Register</a>
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
