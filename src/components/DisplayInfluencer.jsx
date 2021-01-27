import React, { } from 'react'
import "../components/style.css"
import classnames from "classnames";
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardTitle, CardText, CardGroup, CardSubtitle } from "reactstrap";
import { Button, Row, Col, Container, Image } from 'react-bootstrap';
import avatar from "../avatar.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Review from "./Review";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';


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



  render() {
    return (
      <div>
        <Menu />
        <div className="avatar">
          <img src={avatar} className="avatar" alt="" />
        </div>
        <div className="profile-details">
          <h1>{this.props.applicationState.influencer.influencerName} <i class="fas fa-check-circle"></i></h1>
          <p>{this.props.applicationState.influencer.subHeader}
            A digital Jack of all trade based in Lagos Nigeria, creating videos and tech related content on the internet.
                </p>
          <Link to="/UpdateForm">
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
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">Social Media</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">Twitter, Instagram, Youtube, Tiktok</CardSubtitle>
                      <CardText>I creat sponsored ads on <a href="/www.instagram.com/fisayofosudo/">my Instagram Page</a></CardText>
                      <Button variant="primary">Shop Service</Button>
                      <Button variant="outline-secondary"></Button>{' '}
                    </CardBody>
                  </Card>
                  <Card>

                    <CardBody>
                      <CardTitle tag="h5">Videography</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                      <CardText>I make quality video content <a href="/www.youtube.com/channel/UCWHECOBvlhosLKVTHvw-3qw">on my youtube chanel</a></CardText>
                      <Button>Shop Service</Button>

                    </CardBody>
                  </Card>
                  <Card>

                    <CardBody>
                      <CardTitle tag="h5">Marketing Masterclass</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted"> get to know more about Digitalmarketing</CardSubtitle>
                      <CardText>I offer online classes on <a href="/blog.naver.com/re_yoy">my Blog</a></CardText>
                      <Button>Shop Service</Button>
                      <Button variant="outline-secondary"> </Button>{' '}
                    </CardBody>
                  </Card>

                </CardGroup>






              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  As a founder, I know how hard it is trying to be an expert in all areas of the business, stressing yourself out in the meantime and feeling like there’s just not enough hours in the day.
                  I'm lit up by co-creating with brands who are moved by passion and purpose. Helping them to align their visual identity with the calibre of their work and celebrating all of the tiny wins along the way.
                  My experience and passions lie along the intersection of tech reviews, videography and lifestyle, and I naturally gravitate towards projects that are looking for someone who is well-versed in these areas and can amplify their messaging.
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