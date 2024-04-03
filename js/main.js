(function ($) {
    "use strict";
    // header section 
    var typed = new Typed(".auto-type", {
        strings:["Home", "Office", "Plote"],
        typeSpeed:250,
        backSpeed: 250,
        loop:true
    });

  



    // drodown text and icon 
    $('.dropdown-toggle').click(function(){
        $(this).toggleClass('rotate-icon');
       
    })
    $(document).on('click','.checbox-property',function(){
let valueText = $(this).val();
        $("#property-type").text(`(${valueText})`);
    })

   $(document).on('mouseenter','.real-item-card',function(){
    
       $(this).append(`<button class="btn btn-outline-dark  z-1 position-absolute top-50 start-50 translate-middle view-more-btn">View More</button>`);
   });
   $(document).on('mouseleave','.real-item-card',function(){
//   alert()  
    // $(this).find('button').remove();    
});
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Testimonials carousel
    $(".real-estate-option").owlCarousel({
        // autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });
    
     // Testimonials carousel
     $(".common-carousel").owlCarousel({
        // autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });

    $(".residential-project-contianer").owlCarousel({
        // autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
        // Testimonial-single
        $(".testimonial-single").owlCarousel({
            // autoplay: true,
            smartSpeed: 1000,
            margin: 24,
            dots: true,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                992:{
                    items: 1
                },
                1200:{
                    items: 1
                }
            }
        });
    
     
    
})(jQuery);

