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
import Modal from 'react-bootstrap/Modal'

class UpdateForm extends Component {
    //connect input to the backend with the schema
    constructor(props) {
        super(props)
        this.state = {
            influencerName: this.props.applicationState.user.influencerName,
            category: this.props.applicationState.user.category,
            description: this.props.applicationState.user.description,
            followers: null,
            services: [],
            password: this.props.applicationState.user.password,
            subHeader: this.props.applicationState.user.subHeader,
            posts: [],
            reviews: [],
            show: false,
            newService: {
                header: "",
                subheading: "",
                desc: ""
            }
        }
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

//get values of the input field (user details)
    inputHeader = (e) => {
        const newService = { ...this.state.newService }
        newService.header = e.target.value;
        this.setState({
            newService
        })
    }

    inputSubHeading = (e) => {
        const newService = { ...this.state.newService }
        newService.subheading = e.target.value;
        this.setState({
            newService
        })
    }

    inputDesc = (e) => {
        const newService = { ...this.state.newService }
        newService.desc = e.target.value;
        this.setState({
            newService
        })
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
    }

    inputDescription = (e) => {
        const newDescription = e.target.value;
        this.setState({
            description: newDescription
        })
    }

    inputSubDesc = (e) => {
        const newSubHeader = e.target.value;
        this.setState({
            subHeader: newSubHeader
        })
    }

    createService = () => {
        const Service = this.state.newService;
        this.setState({
            newService: Service
        }, () => console.log(this.state.newService))
    }

//Using the schema, send request to the backend and await a response. 
    update = async () => {
        setTimeout(async () => {
            this.setState({
                influencerName: this.state.influencerName,
                followers: this.state.followers,
                services: [...this.state.services, this.state.newService],
                category: this.state.newcategory,


            }, () => { })
            const influencer = {
                influencerName: this.state.influencerName,
                description: this.state.description,
                followers: this.state.followers,
                services: this.state.services,
                category: this.state.category,
                subHeader: this.state.subHeader,
                posts: this.state.posts,
                password: this.state.password,
                reviews: this.state.reviews,

            }
            console.log(influencer.services)
            try {
                const response = await axios.post(`http://localhost:1000/influencer/update/${this.props.applicationState.user._id}`, influencer);
                console.log(response.data);
                const updatedInfluencer = response.data;
                this.props.actions.storeUserData(updatedInfluencer);
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
                                    <Form.Label>Short description</Form.Label>
                                    <Form.Control value={this.state.subHeader} onChange={this.inputSubDesc} type="username" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control value={this.state.description} onChange={this.inputDescription}
                                        type="current instagramFollowers" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Instagram Followers</Form.Label>
                                    <Form.Control value={this.state.followers} onChange={this.inputFollowers}
                                        type="current instagramFollowers" placeholder="eg. 11.6k" />
                                </Form.Group>

                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Services</Form.Label>
                                    <Button variant="primary" onClick={this.handleShow}>
                                        Add new Service
                                    </Button>

                                    <Modal
                                        show={this.state.show}
                                        onHide={this.handleClose}
                                        backdrop="static"
                                        keyboard={false}> 
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal title</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Label>Heading</Form.Label>
                                            <Form.Control value={this.state.newService.header}
                                                onChange={this.inputHeader} />
                                            <Form.Label>Subheading</Form.Label>
                                            <Form.Control value={this.state.newService.subheading}
                                                onChange={this.inputSubHeading} />
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control value={this.state.newService.desc}
                                                onChange={this.inputDesc} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Close
                                    </Button>
                                            <Button variant="primary" onClick={this.createService}>Understood</Button>
                                        </Modal.Footer>
                                    </Modal>

                                </Form.Group>

                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>choose category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={this.state.category}
                                        onChange={this.inputCategory}> 
                                        <option value={this.props.applicationState.user.category}>{this.props.applicationState.user.category}</option>
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

                                <Link to="/personalpageInfluencer">
                                    <Button className="btn" variant="primary" onClick={this.update}> Update</Button>
                                </Link>

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

//connect page to server via redux
const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
