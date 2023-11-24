import Link from "next/link"
export default function about ()
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
                  <Link href="#" target="_blank">
                    {" "}
                    Click here for{" "}
                    <span
                      className="fa fa-hand-o-right hand-icon"
                      aria-hidden="true"
                    />{" "}
                    <span className="hignlaite">More details</span>
                  </Link>
                </h6>
              </div>
              {/*//left*/}
              {/*/right*/}
              <ul className="top-hnt-right-content col-lg-6">
                <li className="button-log usernhy">
                  <Link className="btn-open" href="#">
                    <span className="fa fa-user" aria-hidden="true" />
                  </Link>
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
              <Link className="navbar-brand" href="/">
                Spry<span className="lohny">S</span>tore
              </Link>
              {/* if logo is image enable this   
              <Link class="navbar-brand" href="#/">
                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
              </Link> */}
              {/*/search-right*/}
              <div className="search-right">
                <Link href="#search" title="search">
                  <span className="fa fa-search mr-2" aria-hidden="true" />
                  <span className="search-text">Search here</span>
                </Link>
                {/* search popup */}
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form action="#" method="post" className="search-box">
                      <input
                        type="search"
                        placeholder="Keyword"
                        name="search"
                        
                        
                      />
                      <button type="submit" className="btn">
                        Search
                      </button>
                    </form>
                  </div>
                  <Link className="close" href="#">
                    ×
                  </Link>
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
                  <li className="nav-item active">
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      What We Offer
                    </Link>
                  </li>
                  <li className="nav-item">
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
              <h2 className="hny-title text-center">About Us</h2>
              <ol className="breadcrumb mb-0">
                <li>
                  <Link href="/">Home</Link>
                  <span className="fa fa-angle-double-right" />
                </li>
                <li className="active">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w3l-wecome-content-6">
    {/* /content-6-section */}
    <div className="ab-content-6-mian py-5">
      <div className="container py-lg-5">
        <div className="welcome-grids row">
          <div className="col-lg-6 mb-lg-0 mb-5">
            <h3 className="hny-title">
              About Our Spry<span>Store</span>
            </h3>
            <p className="my-4">
              Excepteur sint occaecat non proident, sunt in culpa quis.
              Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla,
              gravida felis vitae. Phasellus lacinia id, sunt in culpa quis.
              Phasellus lacinia
            </p>
            <p className="mb-4">
              Excepteur sint occaecat non proident, sunt in culpa quis.
              Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.
            </p>
            <div className="read">
              <Link href="#" className="read-more btn">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6 welcome-image">
            <img src="assets/images/2.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //content-6-section */}
  <section className="w3l-specification-6">
    {/* /specification-6*/}
    <div className="specification-6-mian py-5">
      <div className="container py-lg-5">
        <div className="row story-6-grids text-left">
          <div className="col-lg-5 story-gd">
            <img src="assets/images/left2.jpg" className="img-fluid" alt="/" />
          </div>
          <div className="col-lg-7 story-gd pl-lg-4">
            <h3 className="hny-title">
              What We <span>Offer</span>
            </h3>
            <p>
              Lorem illum facere aperiam sequi optio consectetur adipisicing
              elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem
              ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi
              optio consectetur adipisicing elit. Fuga, suscipit totam animi
              consequatur saepe blanditiis.
            </p>
            <div className="row story-info-content mt-md-5 mt-4">
              <div className="col-md-6 story-info">
                <h5>
                  {" "}
                  <Link href="#">01. Visit Store</Link>
                </h5>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur.
                </p>
              </div>
              <div className="col-md-6 story-info">
                <h5>
                  {" "}
                  <Link href="#">02. Add To Cart</Link>
                </h5>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur.
                </p>
              </div>
              <div className="col-md-6 story-info">
                <h5>
                  {" "}
                  <Link href="#">03. Gift Cards</Link>
                </h5>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur.
                </p>
              </div>
              <div className="col-md-6 story-info">
                <h5>
                  {" "}
                  <Link href="#">04. Unique shop</Link>
                </h5>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //specification-6*/}
  <section className="w3l-services-6">
    {/* /content-6-section */}
    <div className="services-grids-6 py-5">
      <div className="container py-lg-5">
        <div className="row w3-icon-grid-gap1">
          <div className="col-md-6 w3-icon-grid1">
            <Link href="#link">
              <span className="fa fa-codepen" aria-hidden="true" />
              <h3>Let your footwear do the talking</h3>
              <div className="clearfix" />
            </Link>
            <p>
              Lorem sint occaecat non proident, sunt in culpa quis. Phasellus
              lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
              felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
              lacinia.
            </p>
          </div>
          <div className="col-md-6 w3-icon-grid1">
            <Link href="#link">
              <span className="fa fa-mobile" aria-hidden="true" />
              <h3>Trendy celebrity collections</h3>
              <div className="clearfix" />
            </Link>
            <p>
              Lorem sint occaecat non proident, sunt in culpa quis. Phasellus
              lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
              felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
              lacinia.
            </p>
          </div>
          <div className="col-md-6 w3-icon-grid1">
            <Link href="#link">
              <span className="fa fa-hourglass" aria-hidden="true" />
              <h3>Animation</h3>
              <div className="clearfix" />
            </Link>
            <p>
              Lorem sint occaecat non proident, sunt in culpa quis. Phasellus
              lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
              felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
              lacinia.
            </p>
          </div>
          <div className="col-md-6 w3-icon-grid1">
            <Link href="#link">
              <span className="fa fa-modx" aria-hidden="true" />
              <h3>Vast collection of Sports shoes</h3>
              <div className="clearfix" />
            </Link>
            <p>
              Lorem sint occaecat non proident, sunt in culpa quis. Phasellus
              lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
              felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
              lacinia.
            </p>
          </div>
          <div className="col-md-6 w3-icon-grid1">
            <Link href="#link">
              <span className="fa fa-bar-chart" aria-hidden="true" />
              <h3>Uniquely designed collection</h3>
              <div className="clearfix" />
            </Link>
            <p>
              Lorem sint occaecat non proident, sunt in culpa quis. Phasellus
              lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
              felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
              lacinia.
            </p>
          </div>
          <div className="col-md-6 w3-icon-grid1">
            <Link href="#link">
              <span className="fa fa-shopping-bag" aria-hidden="true" />
              <h3>High Quality Footwear</h3>
              <div className="clearfix" />
            </Link>
            <p>
              Lorem sint occaecat non proident, sunt in culpa quis. Phasellus
              lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
              felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
              lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //content-6-section */}
  <section className="features-4">
    <div className="features4-block py-5">
      <div className="container py-lg-5">
        <h6>We are the best</h6>
        <h3 className="hny-title text-center">
          What We <span>Offering</span>
        </h3>
        <div className="features4-grids text-center row mt-5">
          <div className="col-lg-3 col-md-6 features4-grid">
            <div className="features4-grid-inn">
              <span className="fa fa-bullhorn icon-fea4" aria-hidden="true" />
              <h5>
                <Link href="#URL">Call Us Anytime</Link>
              </h5>
              <p>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid sec-features4-grid">
            <div className="features4-grid-inn">
              <span className="fa fa-truck icon-fea4" aria-hidden="true" />
              <h5>
                <Link href="#URL">Free Shipping</Link>
              </h5>
              <p>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid">
            <div className="features4-grid-inn">
              <span className="fa fa-recycle icon-fea4" aria-hidden="true" />
              <h5>
                <Link href="#URL">Free Returns</Link>
              </h5>
              <p>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid">
            <div className="features4-grid-inn">
              <span className="fa fa-money icon-fea4" aria-hidden="true" />
              <h5>
                <Link href="#URL">Secured Payments</Link>
              </h5>
              <p>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* features-4 */}
  {/*/team-sec*/}
  <section className="w3l-team-main">
    <div className="team py-5">
      <div className="container py-lg-5">
        <h3 className="hny-title text-center">
          Meet the <span>Team</span>
        </h3>
        <div className="row team-row mt-5">
          <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative">
            <Link href="#">
              <img
                src="assets/images/team1.jpg"
                className="team_member img-fluid"
                alt="Team Member"
              />
            </Link>
            <div className="team_info mt-3 position-absolute">
              <h3>
                <Link href="#" className="team_name">
                  Suzan Lois
                </Link>
              </h3>
              <span className="team_role">Founder &amp; CEO</span>
              <ul className="team-social mt-3">
                <li>
                  <Link href="#">
                    <span className="fa fa-facebook icon_facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-twitter icon_twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-linkedin icon_linkedin" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-google-plus icon_google-plus" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative">
            <Link href="#">
              <img
                src="assets/images/team2.jpg"
                className="team_member img-fluid"
                alt="Team Member"
              />
            </Link>
            <div className="team_info mt-3 position-absolute">
              <h3>
                <Link href="#" className="team_name">
                  Suzan Kin
                </Link>
              </h3>
              <span className="team_role">Designer</span>
              <ul className="team-social mt-3">
                <li>
                  <Link href="#">
                    <span className="fa fa-facebook icon_facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-twitter icon_twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-linkedin icon_linkedin" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-google-plus icon_google-plus" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-4 col-sm-6 team-wrapper position-relative">
            <Link href="#">
              <img
                src="assets/images/team3.jpg"
                className="team_member img-fluid"
                alt="Team Member"
              />
            </Link>
            <div className="team_info mt-3 position-absolute">
              <h3>
                <Link href="#" className="team_name">
                  Kin Lois
                </Link>
              </h3>
              <span className="team_role">Marketing</span>
              <ul className="team-social mt-3">
                <li>
                  <Link href="#">
                    <span className="fa fa-facebook icon_facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-twitter icon_twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-linkedin icon_linkedin" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-google-plus icon_google-plus" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* end team member */}
        </div>
      </div>
    </div>
  </section>
  {/*//team-sec*/}
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
                              <Link class="navbar-brand" href="#/">
                                  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                              </Link> */}
            <p>
              Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
              sequi optio consectetur.Vivamus Link ligula quam. Ut blandit eu leo
              non suscipit.{" "}
            </p>
            <ul className="social-footerhny mt-lg-5 mt-4">
              <li>
                <Link className="facebook" href="#">
                  <span className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link className="twitter" href="#">
                  <span className="fa fa-twitter" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link className="google" href="#">
                  <span className="fa fa-google-plus" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link className="instagram" href="#">
                  <span className="fa fa-instagram" aria-hidden="true" />
                </Link>
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
                      <Link href="/">Home</Link>
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
                      <Link href="/">Careers</Link>
                    </li>
                    <li>
                      <Link href="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link href="/contact">Support</Link>
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
                    <Link className="pay-method" href="#">
                      <span className="fa fa-cc-visa" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link className="pay-method" href="#">
                      <span
                        className="fa fa-cc-mastercard"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link className="pay-method" href="#">
                      <span className="fa fa-cc-paypal" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link className="pay-method" href="#">
                      <span className="fa fa-cc-amex" aria-hidden="true" />
                    </Link>
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
                <Link href="/">Privacy Policy </Link>{" "}
              </li>
              <li>
                <Link href="/">Term of Service</Link>
              </li>
              <li>
                <Link href="/contact">Customer Care</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="columns col-lg-6 text-lg-right">
            <p>
              © 2020 SpryStore. All rights reserved. Design by{" "}
              <Link href="https://w3layouts.com/" target="_blank">
                W3Layouts
              </Link>
            </p>
          </div>
          {/* <button onClick="topFunction()" id="movetop" title="Go to top"> */}
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