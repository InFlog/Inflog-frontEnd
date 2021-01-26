import React, { } from 'react'
import "../components/style.css"
import classnames from "classnames";
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardImg, CardTitle, CardText, CardGroup, CardSubtitle } from "reactstrap";
import { Button, Row, Col, Container, Image } from 'react-bootstrap';
import brand from "../brand.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';


class PersonalPageBrand extends React.Component {
    state = {
        tabs: 1,
        username: this.props.applicationState.user.influencerName,
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    mapFunction = () => {
        console.log(this.props.applicationState.user.services);
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="avatar">


                    <img src={this.props.applicationState.user.image} className="avatar" alt="" />
                </div>
                <div className="profile-details">
                    <h1>{this.props.applicationState.user.brandName} <i class="fas fa-check-circle"></i></h1>
                    <p>
                        {this.props.applicationState.user.subHeader}
                    </p>
                    <p>
                        {this.props.applicationState.user.contact}
                    </p>
                    <Link to="/UpdateFormBrand">
                        <Button className="btn" variant="primary" type="register" >
                            edit profile
                        </Button>
                    </Link>
                </div>
                <div className="nav-wrapper">
                    <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                    >
                        <NavItem>
                            <NavLink
                                aria-selected={this.state.tabs === 2}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 2
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 2)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="about" />
                      About
                    </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                aria-selected={this.state.tabs === 1}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 1
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 1)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="sercives" />
                      Services
                    </NavLink>
                        </NavItem>



                        <NavItem>
                            <NavLink
                                aria-selected={this.state.tabs === 3}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 3
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 3)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="brandorders" />
                      Past Projects
                    </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                aria-selected={this.state.tabs === 4}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 4
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 4)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="contacts" />
                      My Reviews
                    </NavLink>
                        </NavItem>

                    </Nav>
                </div>
                <Card className="shadow">
                    <CardBody>
                        <TabContent activeTab={"tabs" + this.state.tabs}>
                            <TabPane tabId="tabs1">

                                <CardGroup>
                                    <Card>
                                        <CardBody>

                                            <CardTitle tag="h5">Social Media</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Twitter, Instagram, Youtube, Tiktok</CardSubtitle>
                                            <CardText> Create sponsored adds.
                                            <a href="/www.instagram.com/fisayofosudo/">my Instagram Page</a></CardText>
                                            <Button variant="primary">Apply for service</Button>
                                            <Button variant="outline-secondary"></Button>{' '}
                                        </CardBody>
                                    </Card>
                                    <Card>

                                        <CardBody>
                                            <CardTitle tag="h5">Videography</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Reviews</CardSubtitle>
                                            <CardText>Provide reviews for our products <a href="/www.youtube.com/channel/UCWHECOBvlhosLKVTHvw-3qw">on my youtube chanel</a></CardText>
                                            <Button onClick={this.mapFunction}>Appy for Service</Button>

                                        </CardBody>
                                    </Card>
                                    <Card>

                                        <CardBody>
                                            <CardTitle tag="h5">Post and Stories on Instagram</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Be an ambassador  </CardSubtitle>
                                            <CardText>Be one of our faces on social media who represents our values and spread the word about our company</CardText>
                                            <Button>Apply for Service</Button>
                                            <Button variant="outline-secondary"> </Button>{' '}
                                        </CardBody>
                                    </Card>

                                </CardGroup>






                            </TabPane>
                            <TabPane tabId="tabs2">
                                <p className="description">
                                    {/* JBW strives to stand apart from the ordinary.
                                    We create designs that have a strong presence and exude confidence and power.
                                    Our timepieces are made for risk-takers who wish to stand out in the crowd.
                                    Being bold isn’t just what we do; it’s who we are. */}
                                    {this.props.applicationState.user.description}
                                </p>

                                <p>My portfolio</p>
                                <Container>

                                    <Row>
                                        <Col sm={4}><Image src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80" fluid /></Col>
                                        <Col sm={8}><Image src="https://images.unsplash.com/photo-1490132328392-e6ef54a90dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" fluid /></Col>
                                        <Col sm><Image src="https://images.unsplash.com/photo-1531375128131-e56e112aa47f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1790&q=80" fluid /></Col>
                                        <Col sm><Image src="https://images.unsplash.com/photo-1531375128131-e56e112aa47f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1790&q=80" fluid /></Col>
                                        <Col sm><Image src="https://images.unsplash.com/photo-1531375128131-e56e112aa47f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1790&q=80" fluid /></Col>
                                    </Row>
                                    <Row>
                                        <Col sm><Image src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=852&q=80" fluid /></Col>

                                        <Col sm><Image src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" fluid /></Col>


                                    </Row>
                                </Container>



                            </TabPane>

                            <TabPane tabId="tabs3">
                                <p className="description">JBL Watch "Timless" review<a href="/www.youtube.com/watch?v=hc7eZATgR7A">Youtube-Video</a></p>

                                <Button className="btn" variant="primary" type="contact">
                                    Influencer review pending
                    </Button>
                            </TabPane>

                            <TabPane tabId="tabs3">
                                <p className="description">JBW watch "Unique" Reviews.<a href="/www.youtube.com/watch?v=YfkWWDJpucw">Youtube-Video</a></p>

                                <Button className="btn" variant="primary" type="contact">
                                    due to post
                    </Button>
                            </TabPane>

                            <TabPane tabId="tabs4">
                                <p className="description">
                                    No reviews yet
                      </p>

                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>


            </div>
        );
    }
}




const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(PersonalPageBrand);