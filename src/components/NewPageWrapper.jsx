import Script from "next/script";
import React from "react";

const NewPageWrapper = ({ children }) => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Finbest - Banking and Finance HTML Template </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Place favicon.ico in the root directory --> */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/new-assets/img/logo/favicon.png"
        />

        {/* <!-- CSS here --> */}
        <link rel="stylesheet" href="/new-assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/new-assets/css/animate.css" />
        <link rel="stylesheet" href="/new-assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/new-assets/css/slick.css" />
        <link rel="stylesheet" href="/new-assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/new-assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/new-assets/css/flaticon.css" />
        <link rel="stylesheet" href="/new-assets/css/spacing.css" />
        <link rel="stylesheet" href="/new-assets/css/main.css" />
      </head>
      <div>{children}</div>

      <Script src="/new-assets/js/vendor/jquery.js"></Script>
      <Script src="/new-assets/js/vendor/waypoints.js"></Script>
      <Script src="/new-assets/js/bootstrap-bundle.js"></Script>
      <Script src="/new-assets/js/meanmenu.js"></Script>
      <Script src="/new-assets/js/swiper-bundle.js"></Script>
      <Script src="/new-assets/js/slick.js"></Script>
      <Script src="/new-assets/js/jquery-appear.js"></Script>
      <Script src="/new-assets/js/jquery-knob.js"></Script>
      <Script src="/new-assets/js/magnific-popup.js"></Script>
      <Script src="/new-assets/js/nice-select.js"></Script>
      <Script src="/new-assets/js/purecounter.js"></Script>
      <Script src="/new-assets/js/countdown.js"></Script>
      <Script src="/new-assets/js/wow.js"></Script>
      <Script src="/new-assets/js/isotope-pkgd.js"></Script>
      <Script src="/new-assets/js/imagesloaded-pkgd.js"></Script>
      <Script src="/new-assets/js/ajax-form.js"></Script>
      <Script src="/new-assets/js/main.js"></Script>
    </>
  );
};

export default NewPageWrapper;
