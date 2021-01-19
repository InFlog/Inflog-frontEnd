/* import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText} from "mdbreact";

const InfluencerCategory = () => {
  return (
    <MDBRow>
      <MDBCol md="12">
        <div className="card-group my-5">
          <MDBCard personal className="mb-md-0 mb-4">
            <MDBView hover>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                alt="MDBCard image cap"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody>
              <a href="#!">
                <MDBCardTitle>Anna</MDBCardTitle>
              </a>
              <a href="#!" className="card-meta">
                Friends
              </a>
              <MDBCardText>
                Anna is a web designer living in New York.
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
              <a href="#!">
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
              <a href="#!">
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
  );
}

export default InfluencerCategory; */

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
import { MDBIcon, MDBView, MDBMask} from "mdbreact";
const EcommercePage = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Influencer's Category</h2>
      <h5 className='grey-text text-center w-responsive mx-auto mb-5'>
        Find the best service and plan to kick of your idea!
      </h5>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
            <MDBRow>
            <MDBCol md="12">
              <div className="card-group my-5">
                <MDBCard personal className="mb-md-0 mb-4">
                  <MDBView hover>
                    <MDBCardImage
                      top
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                      alt="MDBCard image cap"
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <a href="#!">
                      <MDBCardTitle>Anna</MDBCardTitle>
                    </a>
                    <a href="#!" className="card-meta">
                      Friends
                    </a>
                    <MDBCardText>
                      Anna is a web designer living in New York.
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
                    <a href="#!">
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
                    <a href="#!">
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
    
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default EcommercePage;