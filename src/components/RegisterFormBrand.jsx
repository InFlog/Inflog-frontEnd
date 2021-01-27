import React, { Component } from 'react'
import axios from 'axios';
import config from '../configuration/config';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import imge from "../brandImg.png";
import "../components/style.css"



class RegisterFormBrand extends Component {
    //connect input to the backend with te schema
    constructor(props) {
        super(props)
        this.state = {
            // declaring state of input fields
            username: "",
            category: "",
            contact: "",
            password: "",
            // declaring state of the rest of the mongoDB schema
            services: [],
            posts: [],
            reviews: [],
            pastProjects: [],
            subHeader: "",
            image: "",
            description: "",
            //Alert state
            showSuccess: false,
            variant: "success",
            text: '',
            // verification
            existingbrandName: ""
        }
    }

    // get the value of the input fields with the onChangeHandler
    inputUserName = (e) => {
        const newUserName = e.target.value;
        this.setState({
            username: newUserName
        })
    }

    inputContact = (e) => {
        const newContact = e.target.value;
        this.setState({
            contact: newContact
        })
    }

    inputCategory = (e) => {
        const newCategory = e.target.value;
        this.setState({
            category: newCategory
        })
    }

    inputPassword = (e) => {
        const newPassword = e.target.value;
        this.setState({
            password: newPassword
        })
    }

    // register button for post request
    register = async () => {

        // Verification 
        try {
            const response = await axios.get(config.baseUrl + `/brand`);
            const brand = response.data;

            brand.map(brand => {

                if (brand.brandName === this.state.username) {
                    this.setState({
                        existingbrandName: brand.brandName
                    })
                }
            })

            if (this.state.username === '' || this.state.password === ''
                || this.state.contact === '') {
                this.setState({
                    showSuccess: true,
                    variant: "warning",
                    text: 'Please fill out the input fields'
                })


            } else if (this.state.contact.indexOf("@") === -1) {
                this.setState({
                    showSuccess: true,
                    variant: "warning",
                    text: 'Please enter a valid e-mail address'
                })


            } else if (this.state.category === '') {
                this.setState({
                    showSuccess: true,
                    variant: "warning",
                    text: 'Please choose a category'
                })

            } else if (this.state.existingbrandName !== "") {
                this.setState({
                    showSuccess: true,
                    variant: "warning",
                    text: 'Username already exists'
                })
            }

            else {

                this.setState({
                    username: this.state.username,
                    contact: this.state.contact,
                    password: this.state.password,
                    category: this.state.category

                })

                // redirected to the homepage
                this.props.history.push('/')

                // declare brand for mongoDB
                const brand = {
                    brandName: this.state.username,
                    description: this.state.description,
                    password: this.state.password,
                    posts: this.state.posts,
                    services: this.state.services,
                    reviews: this.state.reviews,
                    category: this.state.category,
                    subHeader: this.state.subHeader,
                    image: this.state.image,
                    contact: this.state.contact
                }

                // post request
                try {
                    const response = await axios.post(config.baseUrl + '/brand/add', brand);
                    console.log(response.data);
                } catch (err) {
                    console.log('Error: ' + err)
                }

            }

        } catch (err) {
            console.log(err)
        }
    }

    //render frontend components
    render() {
        return (
            <div className="container">
                <div className="left">
                    <div className="inner">

                        <div className="logo">I'm a Brand</div>



                        <Form className="form-elem">
                            <Alert variant={this.state.variant} show={this.state.showSuccess}>
                                {this.state.text}
                            </Alert>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control value={this.state.username} onChange={this.inputUserName} type="username" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control value={this.state.contact} onChange={this.inputContact} type="e-mail" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCategory">
                                <Form.Label>choose category</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={this.state.category}
                                    onChange={this.inputCategory}
                                >
                                    <option value=''>please select category</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Makeup">Makeup</option>
                                    <option value="Videography">Videography</option>
                                    <option value="Cuisine">Cuisine</option>
                                    <option value="Interior Design">Interior Design</option>
                                    <option value="Graphic Design">Graphic Design</option>

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={this.inputPassword} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="save password" />
                            </Form.Group>


                            <Button className="btn" variant="primary" onClick={this.register}>
                                Register
                            </Button>
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
export default RegisterFormBrand