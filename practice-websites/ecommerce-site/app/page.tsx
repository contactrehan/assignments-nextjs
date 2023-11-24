import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
    <Head>
    <>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>
    SpryStore E-commerce Category Bootstrap Responsive Website Template | Home
    :: W3layouts
  </title>
  {/* Template CSS */}
  <link rel="stylesheet" href="assets/css/style-starter.css" />
  {/* Template CSS */}
  <link
    href="//fonts.googleapis.com/css?family=Oswald:300,400,500,600&display=swap"
    rel="stylesheet"
  />
  <link
    href="//fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900&display=swap"
    rel="stylesheet"
  />
  {/* Template CSS */}
</>

    </Head>
    {/*w3l-banner-slider-main*/}
    <section className="w3l-banner-slider-main">
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
              <a className="navbar-brand" href="/">
                Spry<span className="lohny">S</span>tore
              </a>
              {/* if logo is image enable this   
                <a class="navbar-brand" href="#/">
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
                  <li className="nav-item active">
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
        <div className="bannerhny-content">
          {/*/banner-slider*/}
          <div className="content-baner-inf">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>
                        Women's Fashion
                        <br />
                        50% Off
                      </h3>
                      <a href="#" className="shop-button btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item2">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>
                        Men's Fashion
                        <br />
                        60% Off
                      </h3>
                      <a href="#" className="shop-button btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item3">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>
                        Women's Fashion
                        <br />
                        50% Off
                      </h3>
                      <a href="#" className="shop-button btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item4">
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>
                        Men's Fashion
                        <br />
                        60% Off
                      </h3>
                      <a href="#" className="shop-button btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/*//banner-slider*/}
          {/*//banner-slider*/}
          <div className="right-banner">
            <div className="right-1">
              <h4>
                Men's Fashion
                <br />
                50% Off
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //w3l-banner-slider-main */}
    <section className="w3l-grids-hny-2">
      {/* /content-6-section */}
      <div className="grids-hny-2-mian py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title mb-0 text-center">
            Shop With <span>Us</span>
          </h3>
          <p className="mb-4 text-center">Handpicked Favourites just for you</p>
          <div className="welcome-grids row mt-5">
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="#URL">
                  <img
                    src="assets/images/grid1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="boxhny-content">
                    <h3 className="title">Product</h3>
                  </div>
                </a>
              </div>
              <h4>
                <a href="#URL">Hand Bags</a>
              </h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="#URL">
                  <img
                    src="assets/images/grid3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="boxhny-content">
                    <h3 className="title">Product</h3>
                  </div>
                </a>
              </div>
              <h4>
                <a href="#URL">Watches</a>
              </h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="#URL">
                  <img
                    src="assets/images/grid2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="boxhny-content">
                    <h3 className="title">Product</h3>
                  </div>
                </a>
              </div>
              <h4>
                <a href="#URL">Shoes</a>
              </h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="#URL">
                  <img
                    src="assets/images/grid4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="boxhny-content">
                    <h3 className="title">Product</h3>
                  </div>
                </a>
              </div>
              <h4>
                <a href="#URL">Suits</a>
              </h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="#URL">
                  <img
                    src="assets/images/grid5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="boxhny-content">
                    <h3 className="title">Product</h3>
                  </div>
                </a>
              </div>
              <h4>
                <a href="#URL">Accessories</a>
              </h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="#URL">
                  <img
                    src="assets/images/grid6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="boxhny-content">
                    <h3 className="title">Product</h3>
                  </div>
                </a>
              </div>
              <h4>
                <a href="#URL">Fragrances</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //content-6-section */}
    <section className="w3l-content-w-photo-6">
      {/* /specification-6*/}
      <div className="content-photo-6-mian py-5">
        <div className="container py-lg-5">
          <div className="align-photo-6-inf-cols row">
            <div className="photo-6-inf-right col-lg-6">
              <h3 className="hny-title text-left">
                All Branded Men's Suits are Flat <span>30% Discount</span>
              </h3>
              <p>Visit our shop to see amazing creations from our designers.</p>
              <a href="#" className="read-more btn">
                Shop Now
              </a>
            </div>
            <div className="photo-6-inf-left col-lg-6">
              <img src="assets/images/1.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //specification-6*/}
    <section className="w3l-video-6">
      {/* /video-6*/}
      <div className="video-66-info">
        <div className="container-fluid">
          <div className="video-grids-info row">
            <div className="video-gd-right col-lg-8">
              <div className="video-inner text-center">
                {/*popup*/}
                <a
                  className="play-button btn popup-with-zoom-anim"
                  href="#small-dialog"
                >
                  <span className="fa fa-play" aria-hidden="true" />
                </a>
                <div id="small-dialog" className="mfp-hide">
                  <div className="search-top notify-popup">
                    <iframe
                      src="https://player.vimeo.com/video/246139491"
                      frameBorder={0}
                      allow="autoplay; fullscreen"
                      
                    />
                  </div>
                </div>
                {/*//popup*/}
              </div>
            </div>
            <div className="video-gd-left col-lg-4 p-lg-5 p-4">
              <div className="p-xl-4 p-0 video-wrap">
                <h3 className="hny-title text-left">
                  All Branded Women's Bags are Flat <span>30% Discount</span>
                </h3>
                <p>Visit our shop to see amazing creations from our designers.</p>
                <a href="#" className="read-more btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //video-6*/}
    <section className="w3l-ecommerce-main">
      {/* /products*/}
      <div className="ecom-contenthny py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title mb-0 text-center">
            Shop With <span>Us</span>
          </h3>
          <p className="text-center">Handpicked Favourites just for you</p>
          {/* /row*/}
          <div className="ecom-products-grids row mt-lg-5 mt-3">
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2 transmitv">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-1.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-11.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Women Maroon Top"
                      />
                      <input type="hidden" name="amount" defaultValue="899.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women Maroon Top </a>
                  </h3>
                  <span className="price">
                    <del>$975.00</del>$899.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-2.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-22.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Men's Pink Shirt"
                      />
                      <input type="hidden" name="amount" defaultValue="599.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Pink Shirt </a>
                  </h3>
                  <span className="price">
                    <del>$775.00</del>$599.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-3.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-33.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Dark Blue Top"
                      />
                      <input type="hidden" name="amount" defaultValue="799.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Dark Blue Top </a>
                  </h3>
                  <span className="price">
                    <del>$875.00</del>$799.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-4.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-44.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Women Tunic"
                      />
                      <input type="hidden" name="amount" defaultValue="399.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women Tunic </a>
                  </h3>
                  <span className="price">
                    <del>$475.00</del>$399.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-5.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-55.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Yellow T-Shirt"
                      />
                      <input type="hidden" name="amount" defaultValue="299.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Yellow T-Shirt</a>
                  </h3>
                  <span className="price">
                    <del>$575.00</del>$299.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-6.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-66.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Straight Kurta"
                      />
                      <input type="hidden" name="amount" defaultValue="699.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Straight Kurta </a>
                  </h3>
                  <span className="price">
                    <del>$775.00</del>$699.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-7.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-77.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="White T-Shirt"
                      />
                      <input type="hidden" name="amount" defaultValue="599.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">White T-Shirt </a>
                  </h3>
                  <span className="price">
                    <del>$675.00</del>$599.99
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 product-incfhny mt-4">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1 img-fluid"
                      src="assets/images/shop-8.jpg"
                    />
                    <img
                      className="pic-2 img-fluid"
                      src="assets/images/shop-88.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <span className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <span className="fa fa-shopping-bag" />
                      </a>
                    </li>
                  </ul>
                  <div className="transmitv single-item">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="transmitv_item"
                        defaultValue="Blue Sweater"
                      />
                      <input type="hidden" name="amount" defaultValue="499.99" />
                      <button
                        type="submit"
                        className="transmitv-cart ptransmitv-cart add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Blue Sweater</a>
                  </h3>
                  <span className="price">
                    <del>$575.00</del>$499.99
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* //row*/}
        </div>
      </div>
    </section>
    {/* //products*/}
    <section className="w3l-content-5">
      {/* /content-6-section */}
      <div className="content-5-main">
        <div className="container">
          <div className="content-info-in row">
            <div className="content-gd col-md-6 offset-lg-3 text-center">
              <h3 className="hny-title two">
                Tons of Products &amp; Options to
                <span>change</span>
              </h3>
              <p>
                Ea consequuntur illum facere aperiam sequi optio consectetur
                adipisicing elitFuga, suscipit totam animi consequatur saepe
                blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                aperiam sequi optio consectetur adipisicing elit..
              </p>
              <a href="#" className="read-more-btn2 btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //content-6-section */}
    <section className="w3l-post-grids-6">
      {/* /post-grids*/}
      <div className="post-6-mian py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title text-center mb-0 ">
            Latest Blog <span>Posts</span>
          </h3>
          <p className="mb-5 text-center">Handpicked Favourites just for you</p>
          <div className="post-hny-grids row mt-5">
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <a href="#">
                <figure>
                  <img
                    className="img-fluid"
                    src="assets/images/bg1.jpg"
                    alt="blog-image"
                  />
                </figure>
              </a>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li>
                    <a href="#admin">By admin</a>
                  </li>
                  <li className="date-post">Aug 10, 2020</li>
                </ul>
                <h4>
                  <a href="#">Here to bring your life style to the next level.</a>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <a href="#">
                <figure>
                  <img
                    className="img-fluid"
                    src="assets/images/bg2.jpg"
                    alt="blog-image"
                  />
                </figure>
              </a>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li>
                    <a href="#admin">By admin</a>
                  </li>
                  <li className="date-post">Aug 10, 2020</li>
                </ul>
                <h4>
                  <a href="#">Here to bring your life style to the next level.</a>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <figure>
                <img
                  className="img-fluid"
                  src="assets/images/bg3.jpg"
                  alt="blog-image"
                />
              </figure>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li>
                    <a href="#admin">By admin</a>
                  </li>
                  <li className="date-post">Aug 10, 2020</li>
                </ul>
                <h4>
                  <a href="#">Here to bring your life style to the next level.</a>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <figure>
                <img
                  className="img-fluid"
                  src="assets/images/bg4.jpg"
                  alt="blog-image"
                />
              </figure>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li>
                    <a href="#admin">By admin</a>
                  </li>
                  <li className="date-post">Aug 10, 2020</li>
                </ul>
                <h4>
                  <a href="#">Here to bring your life style to the next level.</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //post-grids*/}
    <section className="w3l-customers-sec-6">
      <div className="customers-sec-6-cintent py-5">
        {/* /customers*/}
        <div className="container py-lg-5">
          <h3 className="hny-title text-center mb-0 ">
            Customers <span>Love</span>
          </h3>
          <p className="mb-5 text-center">What People Say</p>
          <div className="row customerhny my-lg-5 my-4">
            <div className="col-md-12">
              <div
                id="customerhnyCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#customerhnyCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#customerhnyCarousel" data-slide-to={1} />
                </ol>
                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>Smith Roy</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>Lora Grill</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>Laura Sten</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>John Lee</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*.row*/}
                  </div>
                  {/*.item*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>John Lee</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>Laura Sten</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>Smith Roy</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="customer-info text-center">
                          <div className="feedback-hny">
                            <span className="fa fa-quote-left" />
                            <p className="feedback-para">
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Labore rem, dicta assumenda mollitia molestias
                              quas nihil quasis.
                            </p>
                          </div>
                          <div className="feedback-review mt-4">
                            <img
                              src="assets/images/c2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <h5>Lora Grill</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*.row*/}
                  </div>
                  {/*.item*/}
                </div>
                {/*.carousel-inner*/}
              </div>
              {/*.Carousel*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //customers*/}
    <section className="w3l-subscription-6">
      {/*/customers */}
      <div className="subscription-infhny">
        <div className="container-fluid">
          <div className="subscription-grids row">
            <div className="subscription-right form-right-inf col-lg-6 p-md-5 p-4">
              <div className="p-lg-5 py-md-0 py-3">
                <h3 className="hny-title">
                  Join us for FREE to get instant <span>email updates!</span>
                </h3>
                <p>
                  Subscribe and get notified at first on the latest update and
                  offers!
                </p>
                <form
                  action="#"
                  method="post"
                  className="signin-form mt-lg-5 mt-4"
                >
                  <div className="forms-gds">
                    <div className="form-input">
                      <input
                        type="email"
                        name=""
                        placeholder="Your email here"
                        
                      />
                    </div>
                    <div className="form-input">
                      <button className="btn">Join</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="subscription-left forms-25-info col-lg-6 "></div>
          </div>
          {/*//customers */}
        </div>
      </div>
    </section>
    {/* //customers-6*/}
    <section className="w3l-footer-22">
      {/* footer-22 */}
      <div className="footer-hny py-5">
        <div className="container py-lg-5">
          <div className="text-txt row">
            <div className="left-side col-lg-4">
              <h3>
                <a className="logo-footer" href="/">
                  Spry<span className="lohny">S</span>tore
                </a>
              </h3>
              {/* if logo is image enable this   
                                <a class="navbar-brand" href="#/">
                                    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                                </a> */}
              <p>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo
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
