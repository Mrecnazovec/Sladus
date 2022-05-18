$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: true,

    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        },
        767: {
            items: 3
        }
    }
})
$('.owl-carousel.two').owlCarousel({
    loop: false,

    nav: true,
    dots: true,

    responsive: {
        0: {
            items: 4
        },
        626: {
            items: 4
        },
        900: {
            items: 4
        }
    }
})