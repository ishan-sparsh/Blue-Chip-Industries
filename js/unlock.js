

(function ($) {
        "use strict";

        $(function () {
            var header = $(".start-style");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 10) {
                    header.removeClass('start-style').addClass("scroll-on");
                } else {
                    header.removeClass("scroll-on").addClass('start-style');
                }
            });
        });

        //Animation

        $(document).ready(function () {
            $('body.hero-anime').removeClass('hero-anime');
        });

        //Menu On Hover

        $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
            if ($(window).width() > 750) {
                var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
                setTimeout(function () {
                    _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                }, 1);
            }
        });

        //Switch light/dark

        $("#switch").on('click', function () {
            if ($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                $("#switch").removeClass("switched");
            }
            else {
                $("body").addClass("dark");
                $("#switch").addClass("switched");
            }
        });

    })(jQuery);



/* Navbar overlays banner — no body offset (production layout) */

//backtoTop
$(function () {
    var btn = $('#backtoTop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});



var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight() + 140;

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop()

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});
 


//Animation
$(function () {
    if ($('.wow').length) {
        new WOW().init();
    }
});



$('.scrollTo').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});



/*Homepage Slider*/
$('#bannerSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    lazyLoad: 'progressive',
    dots: false, useTransform: false,
    arrows: false,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="prev arrow"><img src="images/leftarrow.png" alt="left arrow" /></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="next arrow"><img src="images/rightarrow.png" alt="right arrow" /></button>',
    autoplay: true,
    pauseOnHover: true,

});

/*Project Slider*/
$(document).ready(function () {
    $('#projectSlider').slick({
        arrows: false,
        infinite: false,
        //autoplay: true,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1, centerPadding: '20px',
                    centerMode: true
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, centerPadding: '20px',
                    centerMode: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, centerPadding: '20px',
                    centerMode: true
                }
            },
                  {
                      breakpoint: 767,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1, centerPadding: '20px',
                          centerMode: true
                      }
                  }
        ]

    });
});


/*Testimonials Slider*/
$('#testimonialsSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="prev arrow"><img src="images/leftarrow.png" alt="left arrow" /></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="next arrow"><img src="images/rightarrow.png" alt="right arrow" /></button>',
    dots: false, useTransform: false, autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
    ]

});

/*clients Slider*/
$('#clientsSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="prev arrow"><span class="material-symbols-outlined">arrow_back_ios</span></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="next arrow"><span class="material-symbols-outlined">arrow_forward_ios</span></button>',
    dots: false, useTransform: false, autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow:2,
                          slidesToScroll: 1
                      }
                  }
    ]

});

/*clients Slider*/
$('#clientsSlider2').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="prev arrow"><span class="material-symbols-outlined">arrow_back_ios</span></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="next arrow"><span class="material-symbols-outlined">arrow_forward_ios</span></button>',
    dots: false, useTransform: false, autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
    ]

});




/*Facts*/
/*counter*/
//function counter() {

//    $('.timer').countTo();
//}


//$('.counting').each(function () {
//    var $this = $(this),
//        countTo = $this.attr('data-count');

//    $({ countNum: $this.text() }).animate({
//        countNum: countTo
//    },

//    {

//        duration: 3000,
//        easing: 'linear',
//        step: function () {
//            $this.text(Math.floor(this.countNum));
//        },
//        complete: function () {
//            $this.text(this.countNum);
//            //alert('finished');
//        }

//    }); 
//});


function counter() {

    $('.timer').countTo();
}

/*Facts*/
$(function () {

    if ($('.counter').length > 0) {

        var $section = $('.counter');

        $(document).bind('scroll', function (ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                counter();
                $(document).unbind('scroll');
            }
        });
    }
});



$(function () {

    //  lightbox
    if ($('.lightbox').length) {
        $('.lightbox').each(function () {
            var options = { selector: 'a' }
            var overrideoptions = $(this).data('options');
            $(this).lightGallery($.extend({}, options, overrideoptions));
        })
    }


    //$(document).ready(function () {
    //    // init Isotope
    //    var $grid = $('.grid').isotope({
    //        itemSelector: '.element-item',
    //        layoutMode: 'masonry',
    //    });
    //});
});




$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();

    $("nav ul li .fade-in").addClass('fade-in-hover');
    $("nav ul li .fade-out").addClass('fade-out-hover');

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("header").css('background-color', '#ffffff');
                $("nav ul li .fade-in").removeClass('fade-in-hover');
                $("nav ul li .fade-out").removeClass('fade-out-hover');
               
            } else {
                $('header').css('background-color', 'transparent');
                $("nav ul li .fade-in").addClass('fade-in-hover');
                $("nav ul li .fade-out").addClass('fade-out-hover');
            }
        });
    }
});







/* Navbar toggler */
const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");

toggleBtn.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
});
navCloseBtn.addEventListener("click", () => {
    navbarNav.classList.remove("active");
});


/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
    const hasDropdowns = item.querySelector(".dropdown") !== null;
if (hasDropdowns) {
    item.classList.add("icon");
}
});


$('.nav-item').click(function () {
    $('.dropdown').slideToggle(slow);

});



document.addEventListener('click', function (event) {
    // Check if the clicked element is a link with a hash href
    if (event.target && event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        // Get the target element based on the href attribute
        const targetId = event.target.getAttribute('href').substring(1); // Remove the #
        const target = document.getElementById(targetId);

        if (target) {
            // Smooth scroll to the target element
            const offset = 140; // Adjust this value for your fixed header or extra space
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});