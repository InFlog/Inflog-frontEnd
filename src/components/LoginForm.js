import React, { Component } from 'react'
import "../components/style.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import imge from "../loginImg.png";
import axios from 'axios';

class LoginFormIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    inputUserName = (e) => {
        const newUsername = e.target.value;
        this.setState({
            username: newUsername
        })
    }

    inputPassword = (e) => {
        const newPassword = e.target.value;
        this.setState({
            password: newPassword
        })
    }

    authentication = async () => {

        try {
            const response = await axios.get(`http://localhost:1000/influencer`);
            const influencer = response.data;
            const response2 = await axios.get(`http://localhost:1000/brand`);
            const brand = response2.data;

            console.log(brand);
            console.log(influencer);
            influencer.map(influencer => {
                if (influencer.influencerName === this.state.username &&
                    influencer.password === this.state.password) {
                    console.log('perfect')

                }
            })

            brand.map(brand => {
                if (brand.brandName === this.state.username &&
                    brand.password === this.state.password) {
                    console.log('perfect(brand)')
                }
            })


        } catch (err) {
            console.log('Error: ' + err)
        }

        console.log('Hello world')
    }

    render() {
        return (
            <div className="container">
                <div className="left">
                    <div className="inner">

                        <div className="logo">Login</div>

                        <Form className="form-elem">

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="username"
                                    value={this.state.username} onChange={this.inputUserName} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.state.password} onChange={this.inputPassword}
                                    type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="save password" />
                            </Form.Group>

                            <Button className="btn" variant="primary" onClick={this.authentication} >
                                Login
                        </Button>

                            {/* <div className="registerLink">
                                
                                <a href="//example.com">do not have an account yet? Register</a>
                            </div> */}

                        </Form>
                    </div>

                </div>

                <div className="right">

                    <img src={imge} className="imge" alt="" />
                </div>

            </div>
        )
    }

}

export default LoginFormIn 
