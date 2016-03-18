// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Слайдер на главной
// Слайдер в карточке товара
// Слайдер в корзине товара
// Степперы (кол-во товаров)
// Стилизация Select (сортировка товаров в каталоге)
// Слайдер (фильтр) цен в каталоге
// Выбор цвета (чекбокс colorbox)
// Маска для телефонного номера
// Галерея в карточке товара
// Кнопка скролла страницы
// Фиксим подергивание хидера при открытии бутстраповского модального окна

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
    (function () {
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
        });
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    (function () {
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
    // Слайдер в карточке товара
    //---------------------------------------------------------------------------------------
    function initProductSlider() {
        var $slider = $('.js-productslider'),
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.getSliderSettings = function () {
            var setting,
                    settings1 = {
                        maxSlides: 1,
                        minSlides: 1,
                        moveSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                        minSlides: 2,
                        moveSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                        minSlides: 3,
                        moveSlides: 3,
                    },
                    settings4 = {
                        maxSlides: 4,
                        minSlides: 4,
                        moveSlides: 4,
                    },
                    common = {
                        slideWidth: 270,
                        slideMargin: 30,
                        auto: false,
                        pager: false,
                        mode: 'horizontal',
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        useCSS: false,
                        nextText: '<i class="icon-right-open-big"></i>',
                        prevText: '<i class="icon-left-open-big"></i>',
                    },
                    winW = $window.width();
            if (winW < 650) {
                setting = $.extend(settings1, common);
            }
            if (winW >= 650 && winW <= 1000) {
                setting = $.extend(settings2, common);
            }
            if (winW >= 1000 && winW <= 1200) {
                setting = $.extend(settings3, common);
            }
            if (winW > 1200) {
                setting = $.extend(settings4, common);
            }
            return setting;
        }

        method.reloadSliderSettings = function () {
            $slider.reloadSlider($.extend(method.getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }


        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - пересчитываем
                method.reloadSliderSettings();
            }
        }

        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        }

        $slider.bxSlider(method.getSliderSettings());//запускаем слайдер

        $window.bind('resize', method.startResize);//пересчитываем кол-во видимых элементов при ресайзе окна с задержкой .2с

    }
    if ($('.js-productslider').length) { initProductSlider(); }

    //
    // Слайдер в корзине товара
    //---------------------------------------------------------------------------------------
    function initCartSlider() {
        var $slider = $('.js-cartslider'),
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.getSliderSettings = function () {
            var setting,
                    settings1 = {
                        maxSlides: 1,
                        minSlides: 1,
                        moveSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                        minSlides: 2,
                        moveSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                        minSlides: 3,
                        moveSlides: 3,
                    },
                    settings4 = {
                        maxSlides: 4,
                        minSlides: 4,
                        moveSlides: 4,
                    },
                    settings5 = {
                        maxSlides: 5,
                        minSlides: 5,
                        moveSlides: 5,
                    },
                    common = {
                        slideWidth: 170,
                        slideMargin: 30,
                        auto: false,
                        pager: false,
                        mode: 'horizontal',
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        useCSS: false,
                        nextText: '<i class="icon-right-open-big"></i>',
                        prevText: '<i class="icon-left-open-big"></i>',
                    },
                    winW = $window.width();
            if (winW < 450) {
                setting = $.extend(settings1, common);
            }
            if (winW >= 450 && winW <= 650) {
                setting = $.extend(settings2, common);
            }
            if (winW >= 650 && winW <= 1000) {
                setting = $.extend(settings3, common);
            }
            if (winW >= 1000 && winW <= 1250) {
                setting = $.extend(settings4, common);
            }
            if (winW > 1250) {
                setting = $.extend(settings5, common);
            }
            return setting;
        }

        method.reloadSliderSettings = function () {
            $slider.reloadSlider($.extend(method.getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }


        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - пересчитываем
                method.reloadSliderSettings();
            }
        }

        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        }

        $slider.bxSlider(method.getSliderSettings());//запускаем слайдер

        $window.bind('resize', method.startResize);//пересчитываем кол-во видимых элементов при ресайзе окна с задержкой .2с

    }
    if ($('.js-cartslider').length) { initCartSlider(); }

    //
    // Степперы (кол-во товаров)
    //---------------------------------------------------------------------------------------
    $('.js-stepper').TouchSpin({
        verticalbuttons: true,
        min: 1,
        max: 9999,
        step: 1,
        verticalupclass: 'glyphicon glyphicon-triangle-top',
        verticaldownclass: 'glyphicon glyphicon-triangle-bottom'
    });

    //
    // Стилизация Select (сортировка товаров в каталоге)
    //---------------------------------------------------------------------------------------
    function stylingSelect() {
        var $select = $('.js-select');
        $select.each(function () {
            $(this).selectric({
                disableOnMobile: false,
                //openOnHover: true,
                responsive: true
            });
        });
    }
    if ($('.js-select').length) { stylingSelect(); }

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
    // Галерея в карточке товара
    //---------------------------------------------------------------------------------------
    function initGallery() {
        var method = {},
            $zoom = $('.js-zoom'), //блок Превью
            $gallery = $('.js-gallery'), //галерея с мелкими картинками
            isZoomActive = false; //флаг состояния zoom

        method.initZoom = function () {
            var target = $zoom.attr('href');
            $zoom.zoom({
                url: target
            });
            isZoomActive = true;
        }

        method.destroyZoom = function () {
            $zoom.trigger('zoom.destroy');
            isZoomActive = false;
        }

        method.reloadZoom = function (md, xl) {
            if (isZoomActive) {
                method.destroyZoom();
            };
            $zoom.attr('href', xl).children('img').attr('src', md);
            if (!isZoomActive) {
                method.initZoom();
            }
        }

        method.initGallery = function () {
            var $current = $gallery.find('li').eq(0).children('a'),
                md = $current.attr('href'),
                xl = $current.data('img');
            method.reloadZoom(md, xl);
            $current.addClass('current');
        }

        method.changeImage = function (el) {
            if (el.hasClass('current')) {
                return false;
            } else {
                $gallery.find('a').removeClass('current');
                var md = el.attr('href'),
                    xl = el.data('img');
                method.reloadZoom(md, xl);
                el.addClass('current');
            }
        }

        method.initGallery();

        $('.js-gallery').on('click', 'a', function (e) {//меняем картинку по клику на превьюшку и перегружаем зум
            e.preventDefault();
            method.changeImage($(this));
        });

        $zoom.on('click', function (e) {//запрещаем клик (возможно, в дальнейшем потребуется прикрутить к галерее лайтбокс...)
            e.preventDefault();
        });
    }
    if ($('.js-zoom').length) { initGallery() }

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


    //
    // Фиксим подергивание хидера при открытии бутстраповского модального окна
    //---------------------------------------------------------------------------------------
    (function () {
        var $header = $('.b-header__top, .b-header__main');
        $body.on('show.bs.modal', function () {
            if (this.clientHeight <= window.innerHeight) {
                return;
            }
            // Get scrollbar width
            var scrollbarWidth = getScrollBarWidth()
            if (scrollbarWidth) {
                $header.css('padding-right', scrollbarWidth + 'px');
            }
        })
        .on('hide.bs.modal', function () {
            $header.removeAttr('style', 'padding-right');
        });

        function getScrollBarWidth() {
            var inner = document.createElement('p');
            inner.style.width = "100%";
            inner.style.height = "200px";

            var outer = document.createElement('div');
            outer.style.position = "absolute";
            outer.style.top = "0px";
            outer.style.left = "0px";
            outer.style.visibility = "hidden";
            outer.style.width = "200px";
            outer.style.height = "150px";
            outer.style.overflow = "hidden";
            outer.appendChild(inner);

            document.body.appendChild(outer);
            var w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var w2 = inner.offsetWidth;
            if (w1 == w2) w2 = outer.clientWidth;

            document.body.removeChild(outer);

            return (w1 - w2);
        };
    })();
 
});
