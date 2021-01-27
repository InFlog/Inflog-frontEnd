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
import newServiceClass from './service';

class UpdateFormBrand extends Component {
  //connect input to the backend with te schema
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.applicationState.user.brandName,
      category: this.props.applicationState.user.category,
      description: this.props.applicationState.user.description,
      pastProjects: [],
      services: [],
      reviews: [],
      subHeader: this.props.applicationState.user.subHeader,
      password: this.props.applicationState.user.password,
      posts: [],
      newPastProject: "",
      // heading: "",
      // subheading: "",
      // serviceDescription: "",
      show: false,
      newService: {
        header: "",
        subHeading: "",
        serviceDes: ""
      }

    }
    // this.newServiceClass = newServiceClass;
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

  inputHeading = (e) => {
    const newService = { ...this.state.newService };
    newService.header = e.target.value;
    this.setState({
      newService
    })
  }

  inputSubHeader = (e) => {
    const newSubHeader = e.target.value;
    this.setState({
      subHeader: newSubHeader
    })
  }
  inputSubHeading = (e) => {
    const newService = { ...this.state.newService };
    newService.subHeading = e.target.value;
    this.setState({
      newService
    })
  }

  inputServiceDescription = (e) => {
    const newService = { ...this.state.newService };
    newService.serviceDes = e.target.value;
    this.setState({
      newService,

    })
  }

  createNewService = () => {
    const serviceData = this.state.newService;
    this.setState({
      newService: serviceData,
      show: false
    });
    console.log(this.state.newService)
  }

  update = async () => {
    setTimeout(async () => {
      this.setState({
        username: this.state.username,
        pastProjects: this.state.pastProjects.concat(this.state.newPastProject),
        services: this.state.services.concat(this.state.newService),
        category: this.state.category,
        subHeader: this.state.subHeader

      })

      const brand = {
        brandName: this.state.username,
        description: this.state.description,
        pastProjects: this.state.pastProjects,
        services: this.state.services,
        category: this.state.category,
        reviews: this.state.reviews,
        password: this.state.password,
        posts: this.state.posts,
        subHeader: this.state.subHeader
      }
      console.log(this.state.newService);
      console.log(brand.services);
      try {
        const response = await axios.post(`http://localhost:1000/brand/update/${this.props.applicationState.user._id}`,
          brand);
        const updatedBrand = response.data;
        this.props.actions.storeUserData(updatedBrand);

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
                <Form.Label>Short description</Form.Label>
                <Form.Control value={this.state.subHeader}
                  onChange={this.inputSubHeader} type="username" placeholder="" />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Description</Form.Label>
                <Form.Control value={this.state.description} as="textarea" rows={5}
                  onChange={this.inputDescription} type="current instagramFollowers" placeholder="" />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Past Projects</Form.Label>
                <Form.Control value={this.state.newPastProject} onChange={this.inputProjects} type="current instagramFollowers" placeholder="eg. 11.6k" />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Services</Form.Label>
                <Button className="modal-btn" variant="primary" onClick={this.handleShow}>
                  Launch static backdrop modal
                                </Button>

                <Modal
                  show={this.state.show}
                  onHide={this.handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add a new Service</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group controlId="formBasicUsername">
                      <Form.Label>Heading</Form.Label>
                      <Form.Control value={this.state.newService.header}
                        onChange={this.inputHeading} type="heading"
                        placeholder="eg. Social Media" />
                      <Form.Label>Subheading</Form.Label>
                      <Form.Control value={this.state.newService.subHeading}
                        onChange={this.inputSubHeading} type="heading"
                        placeholder="eg. Twitter, Instagram" />
                      <Form.Label>Service description</Form.Label>
                      <Form.Control value={this.state.newService.serviceDes}
                        onChange={this.inputServiceDescription} as="textarea" rows={5} type="heading"
                        placeholder="create adds for our Instagram page" />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.createNewService}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.createNewService} >Update</Button>
                  </Modal.Footer>
                </Modal>
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>choose category</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.category}
                  onChange={this.inputCategory} >
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

              <Link to="/personalpageBrand">
                <Button className="btn" variant="primary" onClick={this.update}>
                  Update
                        </Button>
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
const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormBrand);