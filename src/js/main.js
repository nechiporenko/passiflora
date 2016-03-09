// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Слайдер на главной
// Кнопка скролла страницы

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body');

    $body.append('<div id="overlay" class="overlay"></div>');
    var $overlay = $('#overlay');//оверлей

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    var initDesktopMenu = (function () {
        var $menu = $('.js-menu');

        $menu.find('li').has('ul').addClass('has-menu');

        $('.js-menu > li').on({
            mouseenter: function () {
                $(this).addClass('hover').find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).removeClass('hover').find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        })
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var initMobileMenu = (function () {
        //...
    })();

    //
    // Слайдер на главной
    //---------------------------------------------------------------------------------------
    function initHomeSlider() {
        var $slider = $('.js-homeslider');
        $slider.bxSlider({
            pager: false,
            useCSS: false,
            auto: true,
            pause: 7000,
            autoHover: true,
            nextSelector: '.h-slider__arrow--next',
            prevSelector: '.h-slider__arrow--prev',
            nextText: '<i class="icon-right-open-big"></i>',
            prevText: '<i class="icon-left-open-big"></i>'
        });
    }
    if ($('.js-homeslider').length) {
        initHomeSlider();
    }

    //
    // Степперы (кол-во товаров)
    //---------------------------------------------------------------------------------------
    $('.js-stepper').TouchSpin({
        verticalbuttons: true,
        min: 1,
        step: 1,
        verticalupclass: 'glyphicon glyphicon-triangle-top',
        verticaldownclass: 'glyphicon glyphicon-triangle-bottom'
    });

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());


    

});
