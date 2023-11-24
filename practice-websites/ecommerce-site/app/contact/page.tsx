import Link from "next/link";
export default function contact()
{
    return (
        <>
  <section className="w3l-banner-slider-main inner-pagehny">
    <div className="breadcrumb-infhny">
      <div className="top-header-content">
        <header className="tophny-header">
          <div className="container-fluid">
            <div className="top-right-strip row">
              {/*/left*/}
              <div className="top-hny-left-content col-lg-6 pl-lg-0">
                <h6>
                  Upto 30% off on All styles ,{" "}
                  <a href="#" target="_blank">
                    {" "}
                    Click here for{" "}
                    <span
                      className="fa fa-hand-o-right hand-icon"
                      aria-hidden="true"
                    />{" "}
                    <span className="hignlaite">More details</span>
                  </a>
                </h6>
              </div>
              {/*//left*/}
              {/*/right*/}
              <ul className="top-hnt-right-content col-lg-6">
                <li className="button-log usernhy">
                  <a className="btn-open" href="#">
                    <span className="fa fa-user" aria-hidden="true" />
                  </a>
                </li>
                <li className="transmitvcart galssescart2 cart cart box_1">
                  <form action="#" method="post" className="last">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="display" defaultValue={1} />
                    <button
                      className="top_transmitv_cart"
                      type="submit"
                      name="submit"
                      value=""
                    >
                      My Cart
                      <span className="fa fa-shopping-cart" />
                    </button>
                  </form>
                </li>
              </ul>
              {/*//right*/}
              <div className="overlay-login text-left">
                <button type="button" className="overlay-close1">
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <div className="wrap">
                  <h5 className="text-center mb-4">Login Now</h5>
                  <div className="login-bghny p-md-5 p-4 mx-auto mw-100">
                    {/*/login-form*/}
                    <form action="#" method="post">
                      <div className="form-group">
                        <p className="login-texthny mb-2">Email address</p>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=""
                          
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group">
                        <p className="login-texthny mb-2">Password</p>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder=""
                        //   required=""
                        />
                      </div>
                      <div className="form-check mb-2">
                        <div className="userhny-check">
                          <label className="check-remember container">
                            <input type="checkbox" className="form-check" />{" "}
                            <span className="checkmark" />
                            <p className="privacy-policy">Remember me</p>
                          </label>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <button type="submit" className="submit-login btn mb-4">
                        Sign In
                      </button>
                    </form>
                    {/*//login-form*/}
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
          {/*/nav*/}
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid serarc-fluid">
              <a className="navbar-brand" href="index.html">
                Spry<span className="lohny">S</span>tore
              </a>
              {/* if logo is image enable this   
              <a class="navbar-brand" href="#index.html">
                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
              </a> */}
              {/*/search-right*/}
              <div className="search-right">
                <a href="#search" title="search">
                  <span className="fa fa-search mr-2" aria-hidden="true" />
                  <span className="search-text">Search here</span>
                </a>
                {/* search popup */}
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form action="#" method="post" className="search-box">
                      <input
                        type="search"
                        placeholder="Keyword"
                        name="search"
                        // required="required"
                        // autofocus=""
                      />
                      <button type="submit" className="btn">
                        Search
                      </button>
                    </form>
                  </div>
                  <a className="close" href="#">
                    ×
                  </a>
                </div>
                {/* /search popup */}
              </div>
              {/*//search-right*/}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon fa fa-bars"> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      What We Offer
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*//nav*/}
        </header>
        <div className="breadcrumb-contentnhy">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h2 className="hny-title text-center">Contact Us</h2>
              <ol className="breadcrumb mb-0">
                <li>
                  <Link href="/">Home</Link>
                  <span className="fa fa-angle-double-right" />
                </li>
                <li className="active">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contacts */}
  <section className="w3l-contacts-8">
    <div className="contacts-9 section-gap py-5">
      <div className="container py-lg-5">
        <div className="row top-map">
          <div className="col-lg-6 partners">
            <div className="cont-details">
              <h3 className="hny-title mb-0">
                Get in <span>touch</span>
              </h3>
              <p className="mb-5">
                We're ready to lead you into the future with Business Services
              </p>
              <p className="margin-top">
                <span className="texthny">Call Us : </span>{" "}
                <a href="tel:+(21) 255 999 8899">+(21) 255 999 8899</a>
              </p>
              <p>
                {" "}
                <span className="texthny">Email : </span>{" "}
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
              <p className="margin-top">
                {" "}
                433 California St, Suite 300 San Francisco, CA 94104, USA{" "}
              </p>
            </div>
            <div className="hours">
              <h3 className="hny-title">
                Working <span>Hours</span>
              </h3>
              <h6>Business Service:</h6>
              <p> Monday to Friday 8.00 am - 6.00 pm</p>
              <p> Saturday and Sunday - Closed</p>
              <h6 className="margin-top">Customer support:</h6>
              <p> Monday to Friday 8.00 am - 6.00 pm</p>
              <p> Saturday 10.00 am - 4.00 pm</p>
              <p> Sunday - Closed</p>
            </div>
          </div>
          <div className="col-lg-6 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
              frameBorder={0}
              style={{ border: 0 }}
            //   allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="map-content-9 form-bg-img">
      <div className="layer section-gap py-5">
        <div className="container py-lg-5">
          <div className="form">
            <h3 className="hny-title two text-center">Fill out the form.</h3>
            <form
              action="https://sendmail.w3layouts.com/submitForm"
              className="mt-md-5 mt-4"
              method="post"
            >
              <div className="input-grids">
                <input
                  type="text"
                  name="w3lName"
                  id="w3lName"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="w3lSender"
                  id="w3lSender"
                  placeholder="Email"
                //   required=""
                />
                <input
                  type="subject"
                  name="w3lSubject"
                  id="w3lSubject"
                  placeholder="Subject"
                //   required=""
                />
              </div>
              <div className="input-textarea">
                <textarea
                  name="w3lMessage"
                  id="w3lMessage"
                  placeholder="Message"
                //   required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //contacts */}
  <section className="w3l-footer-22">
    {/* footer-22 */}
    <div className="footer-hny py-5">
      <div className="container py-lg-5">
        <div className="text-txt row">
          <div className="left-side col-lg-4">
            <h3>
              <Link className="logo-footer" href="/">
                Spry<span className="lohny">S</span>tore
              </Link>
            </h3>
            {/* if logo is image enable this   
                              <a class="navbar-brand" href="#index.html">
                                  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                              </a> */}
            <p>
              Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
              sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo
              non suscipit.{" "}
            </p>
            <ul className="social-footerhny mt-lg-5 mt-4">
              <li>
                <a className="facebook" href="#">
                  <span className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <span className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="google" href="#">
                  <span className="fa fa-google-plus" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <span className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="right-side col-lg-8 pl-lg-5">
            <h4>
              Women's Day Special Offer All Branded Sandals are Flat 50%
              Discount
            </h4>
            <div className="sub-columns">
              <div className="sub-one-left">
                <h6>Useful Links</h6>
                <div className="footer-hny-ul">
                  <ul>
                    <li>
                      <Link href="/index">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/">Careers</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="/contact">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sub-two-right">
                <h6>Our Store</h6>
                <p className="mb-5">
                  49436 Broaddus Honey Court Avenue, Madisonville KY 95020,
                  United States of America
                </p>
                <h6>We accept:</h6>
                <ul>
                  <li>
                    <a className="pay-method" href="#">
                      <span className="fa fa-cc-visa" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a className="pay-method" href="#">
                      <span
                        className="fa fa-cc-mastercard"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a className="pay-method" href="#">
                      <span className="fa fa-cc-paypal" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a className="pay-method" href="#">
                      <span className="fa fa-cc-amex" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="below-section row">
          <div className="columns col-lg-6">
            <ul className="jst-link">
              <li>
                <a href="#">Privacy Policy </a>{" "}
              </li>
              <li>
                <a href="#">Term of Service</a>
              </li>
              <li>
                <a href="/contact">Customer Care</a>{" "}
              </li>
            </ul>
          </div>
          <div className="columns col-lg-6 text-lg-right">
            <p>
              © 2020 SpryStore. All rights reserved. Design by{" "}
              <a href="https://w3layouts.com/" target="_blank">
                W3Layouts
              </a>
            </p>
          </div>
          {/* <button onclick="topFunction()" id="movetop" title="Go to top"> */}
            <span className="fa fa-angle-double-up" />
          {/* </button> */}
        </div>
      </div>
    </div>
    {/* //titels-5 */}
    {/* move top */}
    {/* /move top */}
  </section>
</>

    )
}