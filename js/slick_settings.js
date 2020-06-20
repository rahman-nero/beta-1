if (screen.availWidth < 1000) {
          $(".regular").slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll:1,   
            // prevArrow: false,
            // nextArrow : false,
            centerMode: true,
            prevArrow: '<div class="prev"><img src="img/slider/left.svg"></div>',
            nextArrow : '<div class="next"><img src="img/slider/right.svg"></div>'

          });

    }else{
         $(".regular").slick({
            dots: false,
            slidesToShow: 6,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            variableWidth: true,
            slidesToScroll:2,
            prevArrow: '<div class="prev"><img src="img/slider/left.svg"></div>',
            nextArrow : '<div class="next"><img src="img/slider/right.svg"></div>'
        });

    }