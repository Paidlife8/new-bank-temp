import React from "react";

const NewAboutPageContents = () => {
  return (
    <main>
      {/* about breadcrumb area start */}
      <section
        className="breadcrumb__area pt-165 pb-150 p-relative z-index-1 fix"
        data-bg-color="#16243E"
      >
        <div
          className="breadcrumb__bg"
          data-background="/new-assets/img/breadcrumb/bg.png"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title">About Us</h3>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="breadcrumb__content">
                <div className="breadcrumb__list text-center text-sm-end">
                  <span>
                    <a href="index.html">Home</a>
                  </span>
                  <span className="dvdr">
                    <i className="fa-regular fa-angle-right" />
                  </span>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about breadcrumb area end */}
      {/* about area start */}
      <section className="tp-about-area p-relative pt-130 pb-210">
        <div className="tp-about-shape">
          <img src="/new-assets/img/about/shape-3.png" alt />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-about-thumb-wrapper p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="main">
                  <img src="/new-assets/img/about/img-1.jpg" alt />
                </div>
                <img
                  className="shape-1"
                  src="/new-assets/img/about/img-2.jpg"
                  alt
                />
                <img
                  className="shape-2"
                  src="/new-assets/img/about/shape-1.png"
                  alt
                />
                <img
                  className="shape-3"
                  src="/new-assets/img/about/shape-2.png"
                  alt
                />
                <img
                  className="shape-4"
                  src="/new-assets/img/about/shape-4.png"
                  alt
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-wrapper">
                <div className="tp-about-title-wrapper">
                  <span className="tp-section-title-pre">ABOUT US</span>
                  <h3 className="tp-section-title">
                    Empowering Your Financial Future
                  </h3>
                </div>
                <p>
                  At WesCredit, we believe banking should be simple, secure, and centered around you. Since our founding, we’ve been committed to redefining the banking experience—offering innovative financial solutions, personalized support, and the confidence you need to take control of your financial life.
                </p>
                <div className="tp-about-wrapper-list">
                  <ul>
                    <li>
                      <span>
                        <i className="fa-regular fa-circle" />
                      </span>{" "}
                      Over 25 years of Trusted Service
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-circle" />
                      </span>{" "}
                       Serving the United States and Worldwide
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-circle" />
                      </span>{" "}
                      Thousands of Personal and Business Clients
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-circle" />
                      </span>{" "}
                      Experts in Retail, Commercial, and Digital Banking
                    </li>
                  </ul>
                </div>
                <div className="tp-about-btn">
                  <a className="tp-btn" href="about.html">
                    About Us{" "}
                    <span>
                      <i className="fa-regular fa-plus" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about area end */}
      {/* faq area start */}
      <section
        className="tp-faq-area p-relative pt-120 pb-120"
        data-background="/new-assets/img/faq/bg-shape.png"
      >
        <div className="tp-faq-bg" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-faq-wrapper">
                <div className="tp-faq-title-wrapper">
                  <span className="tp-section-title-pre">ask anything</span>
                  <h3 className="tp-section-title">
                    You can contact <br /> us for any question{" "}
                  </h3>
                  <p>
                    We’re here for you—whether you have a question, need help with your account, or want to talk to a financial advisor.{" "}
                  </p>
                </div>
                <div className="tp-faq-counter-wrapper d-flex">
                  <div className="tp-faq-counter d-flex align-items-center mr-20 mb-30">
                    <div className="tp-faq-counter-icon">
                      <span>
                        <img src="/new-assets/img/faq/icon-1.svg" alt />
                      </span>
                    </div>
                    <div className="tp-faq-counter-content">
                      <h4 className="tp-faq-counter-title">
                        <span
                          className="purecounter"
                          data-purecounter-duration={3}
                          data-purecounter-end={10}
                        />
                        +
                      </h4>
                      <p>Experiences</p>
                    </div>
                  </div>
                  <div className="tp-faq-counter d-flex align-items-center mb-30">
                    <div className="tp-faq-counter-icon">
                      <span>
                        <img src="/new-assets/img/faq/icon-2.svg" alt />
                      </span>
                    </div>
                    <div className="tp-faq-counter-content">
                      <h4 className="tp-faq-counter-title">
                        <span
                          className="purecounter"
                          data-purecounter-duration={2}
                          data-purecounter-end={500}
                        />
                        +
                      </h4>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="tp-faq-tab-content tp-accordion wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="accordion" id="general_accordion">
                  <div className="accordion-item tp-faq-active">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How do I open a bank account?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          You can open an account online through our secure portal or visit any of our branches with a valid ID and proof of address. Most accounts are opened within minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                         Is online banking secure?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Absolutely. We use advanced encryption, multi-factor authentication, and real-time fraud monitoring to ensure your data and transactions are safe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What should I do if I lose my card?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          You can block your card instantly using our mobile app or call our 24/7 helpline. We’ll help you replace it quickly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I apply for a loan online?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                         Yes. Our online loan application process is simple, fast, and secure. You can track your application status in real time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
      {/* process area start */}
      <section
        className="tp-process-arae pt-120 pb-120"
        data-bg-color="#F6F6F9"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-process-wrapper">
                <div className="tp-process-title mb-40">
                  <span className="tp-section-title-pre">Our work process</span>
                  <h3 className="tp-section-title">
                    Strategy is the key to <br /> success
                  </h3>
                </div>
                <div className="tp-process-item d-flex align-items-center">
                  <div className="tp-process-item-icon">
                    <span>
                      <img src="/new-assets/img/process/icon-1.svg" alt />
                    </span>
                  </div>
                  <div className="tp-process-item-content">
                    <h4 className="tp-process-item-title">
                      Seamless Onboarding
                    </h4>
                    <p>
                      With a few easy steps, you can open an account, apply for a loan, or set up mobile banking—either online or in-branch. Our customer service team is always ready to guide you.
                    </p>
                  </div>
                </div>
                <div className="tp-process-item d-flex align-items-center">
                  <div className="tp-process-item-icon">
                    <span>
                      <img src="/new-assets/img/process/icon-2.svg" alt />
                    </span>
                  </div>
                  <div className="tp-process-item-content">
                    <h4 className="tp-process-item-title">
                      Secure Access & Smart Tools
                    </h4>
                    <p>
                      Once you're on board, you'll have 24/7 access to your accounts through our secure digital platforms. Manage your money, pay bills, transfer funds, or talk to a financial advisor—all from your phone or computer.
                    </p>
                  </div>
                </div>
                <div className="tp-process-item d-flex align-items-center">
                  <div className="tp-process-item-icon">
                    <span>
                      <img src="/new-assets/img/process/icon-3.svg" alt />
                    </span>
                  </div>
                  <div className="tp-process-item-content">
                    <h4 className="tp-process-item-title">
                      Ongoing Support & Growth
                    </h4>
                    <p>
                      Banking doesn’t end at the transaction. We provide regular financial health checkups, credit score tips, alerts, and opportunities to grow your savings or expand your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-process-thumb-wrapper p-relative wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-process-thumb p-relative">
                  <div className="main">
                    <img src="/new-assets/img/process/img-1.jpg" alt />
                  </div>
                  <img
                    className="shape-1"
                    src="/new-assets/img/process/img-2.jpg"
                    alt
                  />
                </div>
                <div className="tp-process-counter d-flex align-items-center">
                  <div className="tp-process-counter-icon">
                    <span>
                      <i className="flaticon-030-machine-repair" />
                    </span>
                  </div>
                  <div className="tp-process-content">
                    <h4 className="tp-process-counter-title">
                      <span
                        className="purecounter"
                        data-purecounter-duration={3}
                        data-purecounter-end={10}
                      />
                      k+
                    </h4>
                    <p>Project Complete</p>
                  </div>
                </div>
                <div className="tp-process-trusted text-center">
                  <p>
                    Trusted By <br /> <span>2345</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* process area end */}
      {/* testimonial area start */}
      <section
        className="tp-testimonial-area tp-testimonial-bg-color p-relative pt-80 pb-50"
        data-bg-color="#F6F6F9"
      >
        <div className="tp-testimonial-bg">
          <img src="/new-assets/img/testimonial/bg-shape.png" alt />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-testimonial-title">
                <span className="tp-section-title-pre">
                  Clients Testomonial
                </span>
                <h3 className="tp-section-title">
                  Unleashing the power of <br /> your business
                </h3>
              </div>
            </div>
            <div className="tp-testimonial-active swiper-container">
              <div className="swiper-wrapper mb-30 mt-20">
                <div className="swiper-slide">
                  <div className="tp-testimonial-item-wrapper d-flex align-items-center">
                    <div className="tp-testimonial-item-thumb">
                      <img src="/new-assets/img/testimonial/img-1.jpg" alt />
                    </div>
                    <div className="tp-testimonial-item-content p-relative">
                      <div className="tp-testimonial-item-rating">
                        <span className="color">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="color">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="color">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                      <p>
                        Switching to wescredit was the best financial decision I've made. The mobile app is easy to use, and their customer service is outstanding. I finally feel in control of my finances{" "}
                      </p>
                      <h4 className="tp-testimonial-item-title">Sarah Martinez</h4>
                      <span>Small Business Owner</span>
                      <div className="tp-testimonial-item-quot">
                        <img src="/new-assets/img/testimonial/quot.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tp-testimonial-item-wrapper d-flex align-items-center">
                    <div className="tp-testimonial-item-thumb">
                      <img src="/new-assets/img/testimonial/img-2.jpg" alt />
                    </div>
                    <div className="tp-testimonial-item-content p-relative">
                      <div className="tp-testimonial-item-rating">
                        <span className="color">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="color">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="color">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                      <p>
                        I opened a savings account and was amazed at how seamless the process was. They really take the time to understand your goals. It’s not just banking—it’s a partnership.{" "}
                      </p>
                      <h4 className="tp-testimonial-item-title">
                        Richard
                      </h4>
                      <span>IT Consultant</span>
                      <div className="tp-testimonial-item-quot">
                        <img src="/new-assets/img/testimonial/quot.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-testimonial-nav text-end">
              <button type="button" className="testimonial-button-prev-1">
                <i className="fa-regular fa-arrow-left" />
              </button>
              <button type="button" className="testimonial-button-next-1">
                <i className="fa-regular fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}
      {/* team area start */}
      <section className="tp-team-area pt-120 pb-120 tp-team-item-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-title-wrapper text-center mb-30">
                <span className="tp-section-title-pre">our team </span>
                <h3 className="tp-section-title">
                  Dedicated Professionals, <br />Focused on You
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-team-item p-relative wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-team-item-thumb">
                  <a href="team-details.html">
                    <img src="/new-assets/img/team/img-1.jpg" alt />
                  </a>
                </div>
                <div className="tp-team-social">
                  <a className="icon-1" href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a className="icon-2" href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a className="icon-3" href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a className="icon-4" href="#">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </div>
                <div className="tp-team-info text-center">
                  <h4 className="tp-team-info-title">
                    <a href="team-details.html">Aisha Rahman</a>
                  </h4>
                  <p>Head of Retail Banking</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-team-item p-relative wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <div className="tp-team-item-thumb">
                  <a href="team-details.html">
                    <img src="/new-assets/img/team/img-2.jpg" alt />
                  </a>
                </div>
                <div className="tp-team-social">
                  <a className="icon-1" href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a className="icon-2" href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a className="icon-3" href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a className="icon-4" href="#">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </div>
                <div className="tp-team-info text-center">
                  <h4 className="tp-team-info-title">
                    <a href="team-details.html">Carlos Rivera</a>
                  </h4>
                  <p>Chief Financial Officer CFO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-team-item p-relative wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="tp-team-item-thumb">
                  <a href="team-details.html">
                    <img src="/new-assets/img/team/img-3.jpg" alt />
                  </a>
                </div>
                <div className="tp-team-social">
                  <a className="icon-1" href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a className="icon-2" href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a className="icon-3" href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a className="icon-4" href="#">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </div>
                <div className="tp-team-info text-center">
                  <h4 className="tp-team-info-title">
                    <a href="team-details.html">Daniel Kim</a>
                  </h4>
                  <p>Chief Technology Officer CTO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-team-item p-relative wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <div className="tp-team-item-thumb">
                  <a href="team-details.html">
                    <img src="/new-assets/img/team/img-4.jpg" alt />
                  </a>
                </div>
                <div className="tp-team-social">
                  <a className="icon-1" href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a className="icon-2" href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a className="icon-3" href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a className="icon-4" href="#">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </div>
                <div className="tp-team-info text-center">
                  <h4 className="tp-team-info-title">
                    <a href="team-details.html">Leslie Alexander</a>
                  </h4>
                  <p>Sales Rep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team area end */}
      {/* cta area start */}
      <section className="tp-cta-area p-relative">
        <div className="tp-cta-bg" />
        <div className="container">
          <div
            className="tp-cta-bg-wrapper p-relative"
            data-background="/new-assets/img/cta/bg-shape.png"
          >
            <div className="row">
              <div className="col-lg-6">
                <h3 className="tp-cta-title">
                  Get notified about the event! <br /> Subscribe today
                </h3>
              </div>
              <div className="col-lg-6">
                <div className="tp-cta-email p-relative">
                  <input type="email" placeholder="Email Address" />
                  <button>
                    {" "}
                    <span>
                      <i className="fa-solid fa-envelope" /> Subscribe
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cta area end */}
    </main>
  );
};

export default NewAboutPageContents;
