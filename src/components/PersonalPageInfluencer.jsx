import React, { } from 'react'
import axios from 'axios';
import config from '../configuration/config'
import Menu from "./Menu";
import Review from "./Review";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import { Link } from "react-router-dom";
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardTitle, CardText, CardGroup, CardSubtitle } from "reactstrap";
import { Button, Row, Col, Container, Image } from 'react-bootstrap';
import "../components/style.css"
import classnames from "classnames";



class PersonalPageInfluencer extends React.Component {
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
          <h1>{this.props.applicationState.user.influencerName} <i class="fas fa-check-circle"></i></h1>
          <p>
            {this.props.applicationState.user.subheading}
          </p>
          <p>
            Follower: {this.props.applicationState.user.followers}
          </p>
          <p>
            {this.props.applicationState.user.contact}
          </p>
          <p>
            {this.props.applicationState.user.subHeader}
          </p>

          <Link to="/UpdateForm">
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
                      Brand Orders
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
                    return (
                      <Card>
                        <CardBody>
                          <CardTitle tag="h5">{services.header}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">{services.subheading}</CardSubtitle>
                          <CardText>{services.desc}</CardText>
                          <Button variant="primary">Shop Service </Button>
                        </CardBody>
                      </Card>
                    )

                  })}
                </CardGroup>
              </TabPane>

              <TabPane tabId="tabs2">
                <p className="description">
                  {this.props.applicationState.user.description}
                </p>
              </TabPane>

              <TabPane tabId="tabs3">
                <p className="description">Gizmostores NG : Sony PS5 review.<a href="/www.youtube.com/watch?v=hc7eZATgR7A">Youtube-Video</a></p>

                <Button className="btn" variant="primary" type="contact">
                  Brand review pending
                    </Button>
              </TabPane>

              <TabPane tabId="tabs3">
                <p className="description">Infinix NG LTD : Infinix Zero 8.<a href="/www.youtube.com/watch?v=YfkWWDJpucw">Youtube-Video</a></p>

                <Button className="btn" variant="primary" type="contact">
                  due to post
                    </Button>
              </TabPane>

              <TabPane tabId="tabs4">

                <table>
                  <thead>
                    <tr>
                      <th> Services </th>
                      <th> Reviews </th>
                      <th className="score"> Score </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="videography">
                      <td>Social Media</td>
                      <td>
                        <Review rating={2} />
                      </td>

                      <td>
                        <Review rating={0} number_rating={4} />
                      </td>
                    </tr>

                    <tr class="marketing-masterclass">
                      <td>Videography</td>
                      <td>
                        <Review rating={4} />
                      </td>

                      <td>
                        <Review rating={0} number_rating={4} />
                      </td>
                    </tr>

                    <tr class="social-media">
                      <td>Marketing Masterclass </td>
                      <td>
                        <Review rating={2} />
                      </td>

                      <td>
                        <Review rating={0} number_rating={2} />
                      </td>
                    </tr>

                  </tbody>
                </table>

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
export default connect(mapStateToProps, mapDispatchToProps)(PersonalPageInfluencer);
