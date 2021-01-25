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
      <h2 className='h1-responsive font-weight-bold text-left mx-auto my-0'>Services</h2>
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
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Makeup</a>
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
                    src='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Tech</a>
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
                  <MDBCardImage cascade top src='https://images.unsplash.com/photo-1507149833265-60c372daea22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80 ' alt='sample photo' />
                  <MDBCardBody cascade>
                   {/*  <a href='#!' className='text-muted'>
                      <h5>Interior Design</h5>
                    </a> */}
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
                    src='https://images.unsplash.com/photo-1602070945737-067cfd04174c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                   {/*  <a href='#!' className='text-muted'>
                      <h5>Fashion</h5>
                    </a> */}
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
                   {/*  <a href='#!' className='text-muted'>
                      <h5>Makeup</h5>
                    </a> */}
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Cosmetics</a>
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
                  <MDBCardImage cascade top src='https://images.unsplash.com/photo-1529016587530-3210122452e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='sample photo' />
                  <MDBCardBody cascade>
                    {/* <a href='#!' className='text-muted'>
                      <h5>Graphic Design</h5>
                    </a> */}
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
                    src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Cuisine</a>
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
                    src='https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    {/* <a href='#!' className='text-muted'>
                      <h5>Jeans</h5>
                    </a> */}
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Digital Marketing</a>
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
                  <MDBCardImage cascade top src='https://images.unsplash.com/photo-1481732582370-0445455c5ba1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80' alt='sample photo' />
                  <MDBCardBody cascade>
                    {/* <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a> */}
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Videography</a>
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