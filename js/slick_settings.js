if (screen.availWidth < 1000) {


          $(".regular").slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
             
            slidesToScroll:1,
            prevArrow: false,
            nextArrow : false,
            centerMode: true

          });

    }else{
        $('.menu_mb').remove();
        $('.mobile_menu').remove();
       
         $(".regular").slick({
            dots: false,
            slidesToShow: 6,
            infinite: true,
            variableWidth: true,
            slidesToScroll:2,
            prevArrow: '<div class="prev"><img src="img/icons/left.svg"></div>',
            nextArrow : '<div class="next"><img src="img/icons/right.svg"></div>'
        });

    }