// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Слайдер на главной
// Степперы (кол-во товаров)
// Стилизация Select (сортировка товаров в каталоге)
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
    function initMobileMenu() {
        var $btn = $('.js-mtoggle'),
            $menu = $('.js-mmenu'),
            $submenu = $menu.find('.m-submenu'),
            $s_btn,
            method = {};

        method.initSubmenu = function () {
            $menu.find('li').has('ul').addClass('has-menu').append('<button type="button" class="m-menu__btn"><i class="icon-down-open-mini"></i></button>')
            $s_btn = $menu.find('.m-menu__btn'); //заголовки суб-меню
        }

        method.hideSubMenu = function () {
            $s_btn.removeClass('active');
            $submenu.slideUp();
        }

        method.hideMenu = function () {
            $btn.removeClass('active');
            $menu.removeClass('active');
            method.hideSubMenu();
            $html.css('overflow', 'auto');
            $overlay.unbind('click', method.hideMenu).hide();
        }


        method.showMenu = function () {
            $btn.addClass('active');
            $menu.addClass('active');
            $html.css('overflow', 'hidden');
            $overlay.show().bind('click', method.hideMenu);
        }


        method.initSubmenu();

        $('.b-header__top').on('click', '.js-mtoggle', function () {//покажем - спрячем
            if ($(this).hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
            }
        });

        $menu.on('click', '.m-menu__label', method.hideMenu); //закроем по клику по заголовку

        $menu.on('click', '.m-menu__btn', function () {//покажем - спрячем подменю
            var $el = $(this);

            if ($el.hasClass('active')) {
                method.hideSubMenu();
            } else {
                method.hideSubMenu();
                $el.addClass('active').parent('li').find('ul').slideDown();
            }
        });
    }
    initMobileMenu();


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
    // Стилизация Select (сортировка товаров в каталоге)
    //---------------------------------------------------------------------------------------
    function initSorter() {
        var $sorter = $('.js-sorter');
        $sorter.selectric({
            disableOnMobile: false,
            openOnHover: true,
            responsive: true
        });
    }
    if ($('.js-sorter').length) { initSorter();}

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
