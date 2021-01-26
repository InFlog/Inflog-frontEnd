
import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from 'mdbreact';
import { MDBIcon, MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const EcommercePage = () => {
  return (
    <section className='text-left my-5'>
      <h2 className='h1-responsive font-weight-bold text-left mx-auto my-0'>Influencer's Category</h2>
      <h5 className='grey-text text-left w-responsive mx-auto mb-0'>
        Find the best service and plan to kick of your idea!
      </h5>
      <Link to="/SearchInfluencer"> <Button variant="link">See more</Button></Link>

      <MDBRow>
        <MDBCol md="12">
          <div className="card-group my-0">
            <MDBCard personal className="mb-md-0 mb-0">
              <MDBView hover>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                  alt="MDBCard image cap"/>
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody>
                <a href="PersonalPageInfluencer">
                  <MDBCardTitle>Anna</MDBCardTitle>
                </a>
                <a href="/PersonalPageInfluencer" className="card-meta">
                  Digital Marketer
                    </a>
                <MDBCardText>
                  Anna completed 300 job successfuly.
                    </MDBCardText>
                <hr />
                <a href="#!" className="card-meta">
                  <span>
                    <MDBIcon icon="user" />
                        83 Friends
                      </span>
                </a>
                <p className="card-meta float-right">Joined in 2012</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard personal className="mb-md-0 mb-4">
              <MDBView hover>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                  alt="MDBCard image cap"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody>
                <a href="PersonalPageInfluencer">
                  <MDBCardTitle>John</MDBCardTitle>
                </a>
                <a href="#!" className="card-meta">
                  Coworker
                    </a>
                <MDBCardText>John is a copywriter living in Seattle.</MDBCardText>
                <hr />
                <a href="#!" className="card-meta">
                  <span>
                    <MDBIcon icon="user" />
                        48 Friends
                      </span>
                </a>
                <p className="card-meta float-right">Joined in 2015</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard personal className="mb-md-0 mb-4">
              <MDBView hover>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg"
                  alt="MDBCard image cap"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody>
                <a href="PersonalPageInfluencer">
                  <MDBCardTitle>Sara</MDBCardTitle>
                </a>
                <a href="#!" className="card-meta">
                  Coworker
                    </a>
                <MDBCardText>Sara is a video maker living in Tokyo.</MDBCardText>
                <hr />
                <a href="#!" className="card-meta">
                  <span>
                    <MDBIcon icon="user" />
                        127 Friends
                      </span>
                </a>
                <p className="card-meta float-right">Joined in 2014</p>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBCol>
      </MDBRow>

    </section>
  );
};

export default EcommercePage;