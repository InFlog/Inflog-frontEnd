import React, { } from 'react'
import Menu from "./Menu";
import Review from "./Review";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardTitle, CardText, CardGroup, CardSubtitle } from "reactstrap";
import { Button, Row, Col, Container, Image } from 'react-bootstrap';
import "../components/style.css"
import classnames from "classnames";



class DisplayInfluencer extends React.Component {
  state = {
    tabs: 1,
    username: this.props.applicationState.influencer.influencerName,
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
          <img src={this.props.applicationState.influencer.image} className="avatar" alt="" />
        </div>

        <div className="profile-details">
          <h1>{this.props.applicationState.influencer.influencerName} <i class="fas fa-check-circle"></i></h1>
          <p>
            {this.props.applicationState.influencer.subheading}
          </p>
          <p>
            Follower: {this.props.applicationState.influencer.followers}
          </p>
          <p>
            {this.props.applicationState.influencer.contact}
          </p>
          <p>
            {this.props.applicationState.influencer.subHeader}
          </p>
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

        <Card className="card">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <CardGroup>
                  {this.props.applicationState.influencer.services.map(services => {
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
                  {this.props.applicationState.influencer.description}
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
export default connect(mapStateToProps, mapDispatchToProps)(DisplayInfluencer);