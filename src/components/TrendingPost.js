import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const BlogPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img src=""
                  size="100%, 50%"
                  className="img-fluid"/>
                <MDBMask overlay="white-slight" className="waves-light-hero" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">Trending Post</a>
                </h2>
                <p>
                  Campaign By
                  <a href="#!">
                    <strong>Max Mara</strong>
                  </a>
                  , 26/08/2018
                </p>
                <MDBBtn className="btn-fb waves-light">
                  <MDBIcon fab icon="facebook-f" className="pr-2" />
                  Facebook
                </MDBBtn>
                <span className="counter">87</span>
                <MDBBtn className="btn-tw waves-light">
                  <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                <span className="counter">73</span>
                <MDBBtn className="btn-gplus waves-light">
                  <MDBIcon fab icon="instagram" className="pr-2" />
                  Instagram
                </MDBBtn>
                <span className="counter">91</span>
                <MDBBtn color="default" className="waves-light">
                  <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                <span className="counter">67</span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage;