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

const EcommercePage = () => {
  return (
    <section className='text-left my-5'>
      <h2 className='h1-responsive font-weight-bold text-left my-0'>Services</h2>
      <h5 className='grey-text text-left w-responsive mx-auto mb-0'>
        Find the best service and plan to kick of your idea!
      </h5>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
              <MDBCol md='4'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://images.unsplash.com/photo-1600417098578-1e858e93dc88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1644&q=80'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Makeup</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Product Photography</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Digital marketing</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Tech</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Innovation</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80 float' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Interior Design</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Interior Design</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBCol md='4'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Fashion</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Luxury Goods</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Makeup</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Beauty</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Graphic Design</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Graphic Design</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBCol md='4'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shoes</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Leather boots</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Jeans</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Slim jeans</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='4' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default EcommercePage;