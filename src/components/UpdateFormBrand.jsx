import React, { Component } from 'react'
import "../components/style.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import imge from "../updateImg.png";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';

class UpdateFormBrand extends Component {
    //connect input to the backend with te schema
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.applicationState.user.brandName,
            category: this.props.applicationState.user.category,
            description: "",
            pastProjects: [],
            services: [],
            reviews: [],
            password: this.props.applicationState.user.password,
            posts: [],
            newService: "",
            newPastProject: ""

        }
    }

    inputUserName = (e) => {
        const newUserName = e.target.value;
        this.setState({
            username: newUserName
        })
    }
    inputProjects = (e) => {
        const newPastProjects = e.target.value;
        this.setState({
            newPastProject: newPastProjects
        })
    }
    inputCategory = (e) => {
        const newCategory = e.target.value;
        this.setState({

            category: newCategory

        })
        console.log(newCategory);
    }
    inputDescription = (e) => {
        const newDescription = e.target.value;
        this.setState({

            description: newDescription

        })
        console.log(newDescription);
    }
    inputServices = (e) => {
        const newServices = e.target.value;
        this.setState({
            newService: newServices
        })
    }

    update = async () => {
        setTimeout(async () => {
            this.setState({
                username: this.state.username,
                pastProjects: this.state.pastProjects.concat(this.state.newPastProject),
                services: this.state.services.concat(this.state.newService),
                category: this.state.newcategory

            })
            const brand = {
                brandName: this.state.username,
                description: this.state.description,
                pastProjects: this.state.pastProjects,
                services: this.state.services,
                category: this.state.category,
                reviews: this.state.reviews,
                password: this.state.password,
                posts: this.state.posts
            }
            try {
                const response = await axios.post(`http://localhost:1000/brand/update/${this.props.applicationState.user._id}`,
                    brand);
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

                        <div className="logo">Update Profile</div>



                        <Form className="form-elem">

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>New Username</Form.Label>
                                <Form.Control value={this.state.username} onChange={this.inputUserName} type="username" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={this.state.description} onChange={this.inputDescription} type="current instagramFollowers" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Past Projects</Form.Label>
                                <Form.Control value={this.state.newPastProject} onChange={this.inputProjects} type="current instagramFollowers" placeholder="eg. 11.6k" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Services</Form.Label>
                                <Form.Control value={this.state.newService} onChange={this.inputServices} type="" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>choose category</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={this.state.category}
                                    onChange={this.inputCategory}
                                >
                                    <option value='please select a category'>please select new category</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Makeup">Makeup</option>
                                    <option value="Videography">Videography</option>
                                    <option value="Cuisine">Cuisine</option>
                                    <option value="Interior Design">Interior Design</option>
                                    <option value="Graphic Design">Graphic Design</option>

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="save changes" />
                            </Form.Group>

                            {/* <Link to="/profile"> */}
                            <Button className="btn" variant="primary" onClick={this.update}>
                                Update
                        </Button>
                            {/* </Link> */}

                            <div className="discardChanges">
                                <a href="/profile">discard changes</a>
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
export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormBrand);