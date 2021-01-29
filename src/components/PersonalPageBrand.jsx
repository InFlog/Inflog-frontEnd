import React, { } from 'react';
import Menu from "./Menu";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardImg, CardTitle, CardText, CardGroup, CardSubtitle } from "reactstrap";
import { Button, Row, Col, Container, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../components/style.css"
import classnames from "classnames";


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

    Logout = () => {
        const user = false;
        this.props.actions.storeUserData(user);
        this.props.history.push("/")
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

                    <Button className="btn" variant="primary" onClick={this.Logout}>
                        Log out
                    </Button>
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
                                    {this.props.applicationState.user.services.map(services => {
                                        if (services.header === "") {
                                            return (
                                                <div>

                                                </div>
                                            )
                                        } else {
                                            return (
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle tag="h5">{services.header}</CardTitle>
                                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{services.subheading}</CardSubtitle>
                                                        <CardText>{services.desc}</CardText>
                                                        <Button variant="primary">Apply for service</Button>
                                                        <Button variant="outline-secondary"></Button>{' '}
                                                    </CardBody>
                                                </Card>
                                            )
                                        }


                                    })}
                                </CardGroup>
                            </TabPane>

                            <TabPane tabId="tabs2">
                                <p className="description">
                                    {this.props.applicationState.user.description}
                                </p>
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
