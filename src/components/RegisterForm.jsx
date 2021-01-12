import React from 'react'
import "../components/style.css"
import { Form} from 'react-bootstrap'; 
import { Button} from 'react-bootstrap'; 
import { DropdownButton } from 'react-bootstrap'; 
import { Dropdown } from 'react-bootstrap'; 
import imge from "../loginImg.png";


export default function RegisterForm() {
    return (
        <div className="container">
            <div className="left">
                <div className="inner">

                    <div className="logo">Inflog</div>

                    <Form className="form-elem">

                        <DropdownButton id="dropdown-basic-button" title="create Account as">
                            <Dropdown.Item href="#/Influencer">Influencer</Dropdown.Item>
                            <Dropdown.Item href="#/Brand">Brand</Dropdown.Item>
                        </DropdownButton>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="save password" />
                    </Form.Group>

                    <Button className="btn" variant="primary" type="register">
                        Register
                    </Button>

                    </Form>
                    </div>
          
            </div>

        <div className="right">
        
        <img src={imge} className="imge" alt=""/>
        </div>
       
        </div>
    )
}
