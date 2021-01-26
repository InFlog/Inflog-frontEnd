import React, { Component } from 'react'
import "../components/style.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import imge from "../influencerImg.png";
import { Link } from "react-router-dom";


class RegisterFormInfluencer extends Component {
    //connect input to the backend with te schema
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            category: "",
            description: "",
            followers: null,
            password: "",
            services: [],
            posts: [],
            reviews: [],
            portfolio: "",
            subHeader: "",
            image: ""
        }
    }

    inputUserName = (e) => {
        const newUserName = e.target.value;
        this.setState({
            username: newUserName
        })
    }
    inputFollowers = (e) => {
        const newFollowers = e.target.value;
        this.setState({
            followers: newFollowers
        })
    }
    inputCategory = (e) => {
        const newCategory = e.target.value;
        this.setState({

            category: newCategory

        })
        console.log(newCategory);
    }
    inputPassword = (e) => {
        const newPassword = e.target.value;
        this.setState({
            password: newPassword
        })
    }
    register = async () => {
        setTimeout(async () => {
            this.setState({
                username: this.state.username,
                followers: this.state.followers,
                password: this.state.password,
                category: this.state.category

            })
            const influencer = {
                influencerName: this.state.username,
                description: this.state.description,
                password: this.state.password,
                followers: this.state.followers,
                posts: this.state.posts,
                services: this.state.services,
                reviews: this.state.reviews,
                category: this.state.category,
                subHeader: this.state.subHeader,
                image: this.state.image
            }
            try {
                const response = await axios.post('http://localhost:1000/influencer/add', influencer);
                console.log(response.data);
            } catch (err) {
                console.log('Error: ' + err)
            }
        }, 100)
    }
    //render frontend components
    render() {
        return (
            <div className="container">
                <div className="left">
                    <div className="inner">

                        <div className="logo">I'm an Influencer</div>



                        <Form className="form-elem">

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control value={this.state.username} onChange={this.inputUserName} type="username" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Instagram Followers</Form.Label>
                                <Form.Control value={this.state.followers} onChange={this.inputFollowers} type="instagramFollowers" placeholder="eg. 11.6k" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>choose category</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={this.state.category}
                                    onChange={this.inputCategory}
                                >
                                    <option value='please select a category'>please select category</option>
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

                            <Link to="/">
                                <Button className="btn" variant="primary" type="register" onClick={this.register}>
                                    Register
                            </Button>
                            </Link>

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
export default RegisterFormInfluencer