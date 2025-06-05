import Script from "next/script";
import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>
          First Credit Choice - Money Transfer and Online Payments HTML Template
        </title>

        <link
          rel="shortcut icon"
          href="assets/images/fav.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/plugin/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/plugin/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugin/slick.css" />
        <link rel="stylesheet" href="/assets/css/arafat-font.css" />
        <link rel="stylesheet" href="/assets/css/plugin/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <>
        <a href="javascript:void(0)" class="scrollToTop">
          <i class="fas fa-angle-double-up"></i>
        </a>
        <main>{children}</main>
      </>
      <Script src="/assets/js/jquery.min.js"></Script>
      <Script src="assets/js/jquery-ui.js"></Script>
      <Script src="assets/js/bootstrap.min.js"></Script>
      <Script src="assets/js/fontawesome.js"></Script>
      <Script src="assets/js/plugin/slick.js"></Script>
      <Script src="assets/js/plugin/jquery.nice-select.min.js"></Script>
      <Script src="assets/js/plugin/counter.js"></Script>
      <Script src="assets/js/plugin/waypoint.min.js"></Script>
      <Script src="assets/js/plugin/jquery.magnific-popup.min.js"></Script>
      <Script src="assets/js/plugin/wow.min.js"></Script>
      <Script src="assets/js/plugin/plugin.js"></Script>
      <Script src="assets/js/main.js"></Script>
    </>
  );
};

export default PageWrapper;
