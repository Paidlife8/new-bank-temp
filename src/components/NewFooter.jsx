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
                    <img src="/new-assets/img/hero/home-2/shape-3.png" alt />
                  </a>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    WesCredit is built on values: trust, transparency, and technology. Since 2000, we’ve helped millions bank better with human service and digital speed.
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
                      <a href="blog-details.html">5 Ways to Build Credit Fast in 2025</a>
                    </h4>
                    <span>
                      <i className="fa-regular fa-calendar-days" /> Febuary 19,
                      2025
                    </span>
                  </div>
                  <div className="tp-footer-widget-item">
                    <h4 className="tp-footer-widget-item-title">
                      <a href="blog-details.html">SME Banking Trends You Need to Know </a>
                    </h4>
                    <span>
                      <i className="fa-regular fa-calendar-days" /> June 19,
                      2025
                    </span>
                  </div>
                  <div className="tp-footer-widget-item">
                    <h4 className="tp-footer-widget-item-title">
                      <a href="blog-details.html">Digital Banking Safety: Top 7 Tips </a>
                    </h4>
                    <span>
                      <i className="fa-regular fa-calendar-days" /> May 25,
                      2025
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
                    Read More Blogs [Subscribe to Newsletter]
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
                <p>© WesCredit 2025 | All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner text-lg-end">
                <a href="#">About</a>
                <a href="#">Categories</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
