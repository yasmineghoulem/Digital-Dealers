import React from "react";
import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="site-wrap" id="home-section">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>

          <header className="site-navbar site-navbar-target" role="banner">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-3 ">
                  <div className="site-logo">
                    <img className="main-logo" src="/images/logo.png" alt="" />
                    <a href="index.html">
                      <strong>FY</strong>Sa3{" "}
                      <span className="text-primary">.</span>{" "}
                    </a>
                  </div>
                </div>

                <div className="col-9  text-right">
                  <span className="d-inline-block d-lg-none">
                    <a
                      href="#"
                      className="text-white site-menu-toggle js-menu-toggle py-5 text-white">
                      <span className="icon-menu h3 text-white"></span>
                    </a>
                  </span>

                  <Navbar handleClick={this.props.handleClick} />
                </div>
              </div>
            </div>
          </header>
          <div className="ftco-blocks-cover-1">
            <div
              className="ftco-cover-1 overlay"
              style={{ backgroundImage: "url('images/hero_1.jpg')" }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <h1 className="line-bottom">
                      Perfection is always in our mind.
                    </h1>
                  </div>
                  <div className="col-lg-5 ml-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pr-md-5 mr-auto">
                  <h2 className="line-bottom">
                    If You Have Project In Mind. Get A Quotation
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim maiores mollitia qui quam labore hic asperiores
                    provident maxime earum eum.
                  </p>
                </div>
                <Login />
              </div>
            </div>
          </div>
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="main-logo-footer"
                    src="/images/logo.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis impedit, odit minima repellat, doloribus alias amet
                    consequatur inventore.
                  </p>
                </div>
                <div className="col-lg-8 ml-auto">
                  <div className="row">
                    <div className="col-lg-3">
                      <h2 className="footer-heading mb-4">Quick Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Terms of Service</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h2 className="footer-heading mb-4">Quick Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Terms of Service</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h2 className="footer-heading mb-4">Quick Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Terms of Service</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h2 className="footer-heading mb-4">Quick Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Terms of Service</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5">
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i
                        className="icon-heart text-danger"
                        aria-hidden="true"></i>{" "}
                      by Digital Dealers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
