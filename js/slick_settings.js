if (screen.availWidth < 1000) {
        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            variableWidth: true,
             centerMode: true,
            slidesToScroll:1,
            prevArrow: false,
            nextArrow : false

          });
    }else{
        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            variableWidth: true,
            slidesToScroll:1,
            prevArrow: '<div class="prev"><img src="img/left.svg"></div>',
            nextArrow : '<div class="next"><img src="img/right.svg"></div>'
        });

    }