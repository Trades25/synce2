(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(1000).fadeOut(500);
    }
  }

  if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $(".loader-wrap").delay(200).fadeOut(500);
    });
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-top");
      if (windowpos >= 110) {
        siteHeader.addClass("fixed-header");
        scrollLink.addClass("open");
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.removeClass("open");
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="currentColor"/></svg></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    // $(".mobile-menu .menu-box").mCustomScrollbar();

    var mobileMenuContent = $(".main-header .menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev(".megamenu").slideToggle(900);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(100);
        $(target).addClass("active-tab");
      }
    });
  }

  // courses-tab
  if ($(".courses-tab").length) {
    $(".courses-tab .courses-tab-btns .p-tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(".courses-tab .courses-tab-btns .p-tab-btn").removeClass(
          "active-btn"
        );
        $(this).addClass("active-btn");
        $(".courses-tab .p-tabs-content .p-tab").removeClass("active-tab");
        $(target).addClass("active-tab");
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  // banner-carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 6000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  // single-item-carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // two-item-carousel
  if ($(".two-item-carousel").length) {
    $(".two-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="flaticon-thin-right-straight-arrow"></span>',
        '<span class="flaticon-thin-right-straight-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  // three-item-carousel
  if ($(".three-item-carousel").length) {
    $(".three-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // four-item-carousel
  if ($(".four-item-carousel").length) {
    $(".four-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  // five-item-carousel
  if ($(".five-item-carousel").length) {
    $(".five-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="flaticon-thin-right-straight-arrow"></span>',
        '<span class="flaticon-thin-right-straight-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // tools-carousel
  if ($(".tools-carousel").length) {
    $(".tools-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 6000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  //Sortable Masonary with Filters
  function enableMasonry() {
    if ($(".sortable-masonry").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".sortable-masonry .items-container");
      var $filter = $(".filter-btns");

      $container.isotope({
        filter: "*",
        masonry: {
          columnWidth: ".masonry-item.small-column",
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });

      // Isotope Filter
      $filter.find("li").on("click", function () {
        var selector = $(this).attr("data-filter");

        try {
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });
        } catch (err) {}
        return false;
      });

      winDow.on("resize", function () {
        var selector = $filter.find("li.active").attr("data-filter");

        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
      });

      var filterItemA = $(".filter-btns li");

      filterItemA.on("click", function () {
        var $this = $(this);
        if (!$this.hasClass("active")) {
          filterItemA.removeClass("active");
          $this.addClass("active");
        }
      });
    }
  }

  enableMasonry();

  // Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      { accY: -50 }
    );
  }

  //Search Popup
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-toggler").on("click", function () {
      $("#search-popup").addClass("popup-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $("#search-popup").removeClass("popup-visible");
      }
    });
    //Hide Popup
    $(".close-search,.search-popup .overlay-layer").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
    });
  }

  //nice select
  $(document).ready(function () {
    // $("select:not(.ignore)").niceSelect();
  });

  /*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

  jQuery(document).on("ready", function () {
    (function ($) {
      // add your functions
    })(jQuery);
  });

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is loaded, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    enableMasonry();
  });
})(window.jQuery);
