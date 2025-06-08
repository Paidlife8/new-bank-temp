import React from "react";

const NewNav = () => {
  return (
    <header
      id="header-sticky"
      className="tp-header-area-2 p-relative tp-header-height"
    >
      <div className="tp-header-space-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-6">
              <div className="tp-header-logo-2 p-relative">
                <a href="/">
                  <img
                    src="/new-assets/img/logo/WhatsApp Image 1404-03-16 at 13.52.46.jpeg"
                    className="logo-img"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-xl-block">
              <div className="tp-main-menu home-2 d-none d-xl-block">
                <nav className="tp-main-menu-content">
                  <ul>
                    <li className="">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li className="">
                      <a href="/services">Services</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-4 col-6">
              <div className="tp-header-main-right-2 d-flex align-items-center justify-content-xl-end">
                <div className="tp-header-contact-2 d-flex  align-items-center">
                  <div className="tp-header-contact-inner d-none d-xl-flex align-items-center">
                    <div
                      className="tp-hero-button-wrapper-2 d-flex flex-wrap wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".7s"
                    >
                      <div className="tp-hero-btn mr-0">
                        <a className="tp-btn mr-10" href="/sign-up">
                          Get Started
                          <span>
                            <i className="fa-regular fa-plus" />
                          </span>
                        </a>
                      </div>
                      <div className="tp-hero-call-2 d-flex align-items-center">
                        <div className="tp-hero-call-inner-2">
                          <span>
                            <a href="/login">Login</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-header-main-right-hamburger-btn d-xl-none offcanvas-open-btn text-end">
                  <button className="hamburger-btn">
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewNav;
