import React, {} from 'react'
import "../components/style.css"
import classnames from "classnames";
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
  } from "reactstrap";
import { Button} from 'react-bootstrap'; 



class PersonalPageInfluencer extends React.Component {
    state = {
      tabs: 1
    };
    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };

   
        render() {
          return (
            <>
              <div className="nav-wrapper">
                <Nav
                  className="nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  pills
                  role="tablist"
                >
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
                      aria-selected={this.state.tabs === 3}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.tabs === 3
                      })}
                      onClick={e => this.toggleNavs(e, "tabs", 3)}
                      href="#pablo"
                      role="tab"
                    >
                      <i className="reviews" />
                      Reviews
                    </NavLink>
                  </NavItem>

                </Nav>
              </div>
              <Card className="shadow">
                <CardBody>
                  <TabContent activeTab={"tabs" + this.state.tabs}>
                    <TabPane tabId="tabs1">
                      <p className="description">
                        <ul>
                        
                        <li>Digital marketing on <a href="/www.instagram.com/sueddu/">my Instagram Page</a> </li>
                        <li>Advertise on <a href="/blog.naver.com/re_yoy">my Blog</a> </li>
                        <li>Website Design </li>
                        <li>Simple video editing <a href="/www.youtube.com/channel/UCdM-fLpO0Nv67NLDofSl9yA">check out my youtube chanel</a></li>
                        
                        </ul>
                      </p>
                      <Button className="btn" variant="primary" type="contact">
                        Edit Services
                    </Button>
                    </TabPane>
                    <TabPane tabId="tabs2">
                      <p className="description">
                      As a founder, I know how hard it is trying to be an expert in all areas of the business, stressing yourself out in the meantime and feeling like there’s just not enough hours in the day. 
                      I'm lit up by co-creating with women who are moved by passion and purpose. Helping them to align their visual identity with the calibre of their work and celebrating all of the tiny wins along the way. 
                      My experience and passions lie along the intersection of wellbeing, beauty and spirituality, and I naturally gravitate towards projects that are looking for someone who is well-versed in these areas and can amplify their messaging.
                      </p>
                    <Button className="btn" variant="primary" type="contact">
                        Edit About
                    </Button>
                    </TabPane>
                    <TabPane tabId="tabs3">
                      <p className="description">
                        No reviews yet
                      </p>
                      
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </>
          );
        }
      }
      
      
      
      
export default PersonalPageInfluencer;

