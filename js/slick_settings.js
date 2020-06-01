if (screen.availWidth < 1000) {
          $(".regular").slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
             
            slidesToScroll:1,
            prevArrow: false,
            nextArrow : false,
            centerMode: true,

          });

    }else{
       
         $(".regular").slick({
            dots: false,
            slidesToShow: 6,
            infinite: true,
            variableWidth: true,
            slidesToScroll:2,
            prevArrow: '<div class="prev"><img src="img/left.svg"></div>',
            nextArrow : '<div class="next"><img src="img/right.svg"></div>'
        });

    }