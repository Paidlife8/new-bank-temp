import React from "react";

const NewMobileNav = () => {
  return (
    <div className="offcanvas__area">
      <div className="offcanvas__wrapper">
        <div className="offcanvas__close">
          <button className="offcanvas__close-btn offcanvas-close-btn">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L11 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="offcanvas__content">
          <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
            <div className="offcanvas__logo logo">
              <a href="/">
                <img src="/new-assets/img/logo/logo-black.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="tp-main-menu-mobile fix d-xl-none mb-40" />
          <div className="offcanvas__contact">
            <h4 className="offcanvas__title">Contacts</h4>
            <div className="offcanvas__contact-content d-flex">
              <div className="offcanvas__contact-content-icon">
                <i className="fa-sharp fa-solid fa-location-dot" />
              </div>
              <div className="offcanvas__contact-content-content">
                <a href="https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1">
                  86 Road Broklyn Street, 600{" "}
                </a>
              </div>
            </div>
            <div className="offcanvas__contact-content d-flex">
              <div className="offcanvas__contact-content-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="offcanvas__contact-content-content">
                <a href="mailto:needhelp@company.com"> Needhelp@company.com</a>
              </div>
            </div>
            <div className="offcanvas__contact-content d-flex">
              <div className="offcanvas__contact-content-icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="offcanvas__contact-content-content">
                <a href="tel:01310-069824"> +92 666 888 0000</a>
              </div>
            </div>
          </div>
          <div className="offcanvas__social">
            <a className="icon facebook" href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="icon twitter" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="icon youtube" href="#">
              <i className="fab fa-youtube" />
            </a>
            <a className="icon linkedin" href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMobileNav;
