import React from 'react'
import axios from 'axios';
import config from '../configuration/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import imge from "../generalloginImg.png";
import "../components/style.css"



class LoginForm extends React.Component {

    //connect input to the backend with the schema
    constructor(props) {
        super(props)
        this.state = {
            // declare state of input fields
            username: "",
            password: "",
            // declare state of alert
            showSuccess: false,
            variant: "success",
            text: '',
        }
    }

    //get values of the input field (user details)
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


    //Call function, for username and acount details to render when logged in
    authentication = async () => {

        try {
            // get all influencer
            const response = await axios.get(config.baseUrl + `/influencer`);
            const influencer = response.data;
            // get all brands
            const response2 = await axios.get(config.baseUrl`/brand`);
            const brand = response2.data;

            // compare input fields with instances of db
            influencer.map(influencer => {
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

            // compare input fields with instances of db
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
    }


    //render frontend components (bootstrap)

    render() {
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

                            <Button className="btn" variant="primary" onClick={this.authentication}>
                                Login
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

//connect page to server via redux
const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);