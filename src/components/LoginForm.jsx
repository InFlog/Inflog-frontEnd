import React from 'react'
import "../components/style.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import imge from "../generalloginImg.png";
import { Link, Router, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import { Alert } from 'react-bootstrap';

class LoginForm extends React.Component {
    //connect input to the backend with te schema
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            showButton: false,
            to: false,
            showSuccess: false,
            variant: "success",
            text: '',
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

            // POST http://localhost:1000/login
            // {
            //     "username": this.state.username,
            //     "password": this.state.password
            // }

            const influencer = response.data;
            const response2 = await axios.get(`http://localhost:1000/brand`);
            const brand = response2.data;
            // console.log(brand);
            // console.log(influencer);

            // let loggedInUser = influencer.find(influencer => influencer.influencerName === username && influencer.password === password)

            influencer.map(influencer => {

                console.log("username: " + this.state.username + ", password: " + this.state.password)

                if (influencer.influencerName === this.state.username &&
                    influencer.password === this.state.password) {
                    this.setState({
                        to: "/personalpageInfluencer",
                        text: "success",
                        showSuccess: true,
                        success: true
                    }, () => {
                        const loginInfluencer = influencer;
                        this.props.actions.storeUserData(loginInfluencer);
                        this.props.history.push("/personalpageInfluencer")
                    })
                    console.log('it works ')
                }

                if (influencer.influencerName !== this.state.username &&
                    influencer.password !== this.state.password) {
                    this.setState({
                        variant: "warning",
                        text: "wrong login information",
                        showSuccess: true,
                        success: false
                    })
                }

            })


            brand.map(brand => {
                if (brand.brandName === this.state.username &&
                    brand.password === this.state.password) {
                    this.setState({
                        to: "/personalpageBrand",
                        text: "success",
                        showSuccess: true,
                        success: true
                    }, () => {
                        const loginbrand = brand;
                        this.props.actions.storeUserData(loginbrand);
                        this.props.history.push("/personalpageBrand")
                    })
                    console.log('it works ')
                }

                if (brand.brandName !== this.state.username &&
                    brand.password !== this.state.password) {
                    this.setState({
                        variant: "warning",
                        text: "wrong login information",
                        showSuccess: true,
                        success: false
                    })
                }
            })


        } catch (err) {
            console.log('Error: ' + err)
        }
        console.log('Hello world')
    }

    //render frontend components
    render() {

        // if (this.state.success)
        //     return <Redirect to="/personalpage" />

        return (
            <div className="container">
                <div className="left">
                    <div className="inner">

                        <div className="logo">Login</div>


                        <Form className="form-elem">
                            <Alert variant={this.state.variant} show={this.state.showSuccess}>
                                {this.state.text}
                            </Alert>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder=""
                                    value={this.state.username} onChange={this.inputUserName} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder=""
                                    value={this.state.password} onChange={this.inputPassword} />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="save password" />
                            </Form.Group>


                            <Button className="btn" variant="primary" onClick={this.authentication}
                            >
                                {/* <Link to={this.state.to} disabled={this.state.disabled}> */}
                                    Login
                                    {/* </Link> */}
                            </Button>





                            <div className="registerLink">
                                <a href="/">do not have an account yet? Register</a>
                            </div>


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

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
