import React from "react";

const LoginNav = () => {
  return (
    <header className="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src="/new-assets/img/logo/WhatsApp Image 1404-03-16 at 13.52.46.jpeg"
                  className="logo logo-img"
                  alt="logo "
                />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-content"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0"></ul>
                <div className="right-area header-action d-flex align-items-center max-un">
                  <a href="/login" className="login">
                    Login
                  </a>
                  <a href="/sign-up" className="cmn-btn">
                    Sign Up
                    <i className="icon-d-right-arrow-2" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginNav;
