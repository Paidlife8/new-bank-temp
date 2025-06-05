import React from "react";

const NewFooter = () => {
  return (
    <footer
      className="tp-footer-area-2 pt-140 p-relative z-index-1"
      data-bg-color="#16243E"
    >
      <div className="tp-footer-bg-shape-2">
        <img
          className="shape-1"
          src="/new-assets/img/footer/home-2/shape-1.png"
          alt
        />
        <img
          className="shape-2"
          src="/new-assets/img/footer/home-2/shape-2.png"
          alt
        />
      </div>
      <div className="tp-footer-main-area tp-footer-border">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-2-col-1 mb-50">
                <div className="tp-footer-logo mb-20">
                  <a href="index.html">
                    {" "}
                    <img src="/new-assets/img/logo/logo.png" alt />
                  </a>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    Payment processing is a critical component of any business
                    that sells goods or se Payment processing is a critical
                    component of any.
                  </p>
                  <div className="tp-footer-widget-social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-2-col-2 mb-50">
                <h3 className="tp-footer-widget-title">Quick links</h3>
                <div className="tp-footer-widget-content">
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog Grid</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-2-col-3 mb-50">
                <h3 className="tp-footer-widget-title">Popular Post</h3>
                <div className="tp-footer-widget-content">
                  <div className="tp-footer-widget-item">
                    <h4 className="tp-footer-widget-item-title">
                      <a href="blog-details.html">ished fact that a reader </a>
                    </h4>
                    <span>
                      <i className="fa-regular fa-calendar-days" /> October 19,
                      2023
                    </span>
                  </div>
                  <div className="tp-footer-widget-item">
                    <h4 className="tp-footer-widget-item-title">
                      <a href="blog-details.html">will distrol acted desig </a>
                    </h4>
                    <span>
                      <i className="fa-regular fa-calendar-days" /> October 19,
                      2023
                    </span>
                  </div>
                  <div className="tp-footer-widget-item">
                    <h4 className="tp-footer-widget-item-title">
                      <a href="blog-details.html">will distrol acted desig </a>
                    </h4>
                    <span>
                      <i className="fa-regular fa-calendar-days" /> October 19,
                      2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-2-col-4 mb-50">
                <h3 className="tp-footer-widget-title">Newsletter</h3>
                <div className="tp-footer-widget-content">
                  <p>
                    It's important for businesses to carefully consider their
                    pay.
                  </p>
                  <div className="tp-footer-content-email">
                    <input type="email" placeholder="Email Address" />
                    <button>
                      {" "}
                      <span>
                        <i className="fa-solid fa-paper-plane" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-copyright-area p-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner">
                <p>© Finbest 2023 | All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner text-lg-end">
                <a href="#">About us</a>
                <a href="#">Categories</a>
                <a href="#">Services</a>
                <a href="#">Blog Grid</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
