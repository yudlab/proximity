    //add mobile class if width < 900
    (function(){
        if(getWidth() < 900) {
            $('body').addClass('mobile')
        }
    })();
    
    //use to handle fixed|static header
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        (getWidth() > 900 && height  > 350) ? $('header').addClass('scroll') : $('header').removeClass('scroll')
    });
    
    //event listener for menu
    $('#toggle-menu').on('click tap touch', function () {
        if($('.header-wrap .menu').hasClass('open')) {
            $('.header-wrap .menu').removeClass('open').addClass('close')
            $(this).removeClass('open')
            $('body').removeClass('overflow')
            setTimeout(function(){
                $('.header-wrap .menu').css('display', 'none')
            }, 1500)
        }
        else {
            $('.header-wrap .menu').addClass('open').removeClass('close').css('animation', 'MenuShow 1.5s linear 1.5s;')
            $(this).addClass('open')
            $('body').addClass('overflow')
            setTimeout(function(){
                $('.header-wrap .menu').css('display', 'flex')
            }, 1500)
        }
    })

    //event for language selector
    $('#lang_selector span').on('click tap touch', function () {
        if( $('html').attr('lang') !== $(this).data('lang')) {
            $('#lang_selector span').removeClass('active')
            $('html').attr('lang', $(this).data('lang'))
            $(this).addClass('active')
            //code to set cookie/re-render/reload page to apply new lang.
            // @Todo: Auto Google Translate?
        }
    })

    //function which slides to elm
    function goto(elm) {
        $('html, body').animate({
            scrollTop: $(elm).offset().top
        }, 1200);
    }

    //Get width of current window
    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }