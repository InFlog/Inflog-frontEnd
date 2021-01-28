import React, { Component } from 'react'
import axios from 'axios';
import config from '../configuration/config';
import UploadImage from './UploadImage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import imge from "../updateImg.png";
import "../components/style.css"



class UpdateForm extends Component {
    //connect input to the backend with the schema
    constructor(props) {
        super(props)
        this.state = {
            // getting state of global state
            influencerName: this.props.applicationState.user.influencerName,
            category: this.props.applicationState.user.category,
            description: this.props.applicationState.user.description,
            followers: this.props.applicationState.user.followers,
            services: this.props.applicationState.user.services,
            password: this.props.applicationState.user.password,
            subHeader: this.props.applicationState.user.subHeader,
            image: this.props.applicationState.user.image,
            contact: this.props.applicationState.user.contact,
            posts: this.props.applicationState.user.posts,
            reviews: this.props.applicationState.user.reviews,
            //declare state of new service object
            newService: {
                header: "",
                subheading: "",
                desc: ""
            },
            // show property for modal
            show: false,
        }
    }


    // handleChangers for modal
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

    // get the value of the input fields with the onChangeHandler
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

    // get values of service objects
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

    // create new service
    createService = () => {
        this.setState({
            services: [...this.state.services, this.state.newService],
            show: false
        })
    }

    // Image function which is passed to UploadImage component
    setImageUrl = (url) => {
        this.setState({
            image: url
        })
    }


    // function to update influencer object
    update = async () => {
        // setState of input fields
        this.setState({
            followers: this.state.followers,
            category: this.state.category,
            description: this.state.description,
            subHeader: this.state.subHeader,

        }, async () => {
            // declare updated influencer for mongoDB
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
                contact: this.state.contact,
                image: this.state.image
            }

            // post request
            try {
                const response = await axios.post(config.baseUrl + `/influencer/update/${this.props.applicationState.user._id}`, influencer);
                console.log(response.data);
                const updatedInfluencer = response.data;
                this.props.actions.storeUserData(updatedInfluencer);

                this.props.history.push("/personalpageInfluencer");
            } catch (err) {
                console.log('Error: ' + err)
            }
        })
    }


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

                            <UploadImage controller={this} />

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={this.state.description} onChange={this.inputDescription}
                                    as="textarea" rows={5} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Instagram Followers</Form.Label>
                                <Form.Control value={this.state.followers} onChange={this.inputFollowers}
                                    type="current instagramFollowers" placeholder="eg. 11.6k" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Services</Form.Label>
                                <Button variant="primary" className="service" onClick={this.handleShow}>
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
                                            onChange={this.inputDesc} as="textarea" rows={5} />
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

                            <Button className="btn" variant="primary" onClick={this.update}>
                                Update
                            </Button>

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
export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);