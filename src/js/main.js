// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Слайдер на главной
// Степперы (кол-во товаров)
// Стилизация Select (сортировка товаров в каталоге)
// Слайдер (фильтр) цен в каталоге
// Выбор цвета (чекбокс colorbox)
// Маска для телефонного номера
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
            //openOnHover: true,
            responsive: true
        });
    }
    if ($('.js-sorter').length) { initSorter(); }

    //
    // Слайдер (фильтр) цен в каталоге
    //---------------------------------------------------------------------------------------
    function initPriceSlider() {
        var $slider = document.getElementById('priceslider'),
            low_price = Math.floor($('#low_price').val()),
            high_price = Math.floor($('#high_price').val());

        noUiSlider.create($slider, {
            start: [low_price, high_price],
            step: 100,
            connect: true,
            range: {
                'min': low_price,
                'max': high_price
            }
        });

        var $low_price = document.getElementById('low_price'),
            $high_price = document.getElementById('high_price');

        $slider.noUiSlider.on('update', function (values, handle) {//меняем значения в полях ввода когда двигаем ползунки
            var value = values[handle];

            if (handle) {
                $high_price.value = Math.floor(value);
            } else {
                $low_price.value = Math.floor(value);
            }
        });

        $('.js-priceinput').keydown(function (e) { //разрешим вводить только цифры в поле
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

        $low_price.addEventListener('change', function () {
            $slider.noUiSlider.set([this.value, null]);
        });

        $high_price.addEventListener('change', function () {
            $slider.noUiSlider.set([null, this.value]);
        });
    };
    if ($('.js-priceslider').length && !$html.hasClass('lt-ie9')) {
        initPriceSlider();
    };

    //
    // Выбор цвета (чекбокс colorbox)
    //---------------------------------------------------------------------------------------
    function initColorbox() {
        var $colorbox = $('.js-colorlist .color-list__thumb');
        $colorbox.each(function () {
            var $el = $(this),
                $check = $el.find('input');
            if ($el.data('color') !== '') { //передадим цвет через data-атрибут
                $el.css('background-color', $(this).data('color'));
            }
            if ($el.data('img') !== '') {//если нужно передать картинку вместо цвета
                $el.css('background-image', $(this).data('img'));
            }
            if ($check.is(':checked')) {//если чекбокс включен - покажем галочку
                $el.addClass('active');
            }
        });
        $colorbox.on('click', function () {
            var $el = $(this),
                $target = $el.find('input');
            if ($target.prop('type') == 'radio') { //если кликаем по радио-кнопке
                if ($el.hasClass('active')) {
                    return false; //кликнули по активной кнопке - ничего не делаем
                } else {
                    var $ul = $el.parents('ul');
                    $ul.find('.colorbox').removeClass('active');
                    $el.addClass('active').find('input').prop('checked', true);
                }
            } else { //если кликаем на чекбокс
                if ($el.hasClass('active')) {
                    $el.removeClass('active').find('input').prop('checked', false);
                } else {
                    $el.addClass('active').find('input').prop('checked', true);
                }
            }
        });
    };
    if ($('.js-colorlist').length) { initColorbox(); };

    //
    // Маска для телефонного номера
    //---------------------------------------------------------------------------------------
    $('.js-phone').mask('+380 99 999-99-99');

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
