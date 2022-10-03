$(document).ready(function () {
    //Owl
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#project-slider').owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        margin:24,
        navText:["PREV","NEXT"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
    
            },
            1140:{

      items:2,
      center:true,
            },
            1450:{

                items:3,
                center:true,
            }
        }
    
});

    $('#reviews-slider').owlCarousel({
        loop: true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
      
        
    })
});