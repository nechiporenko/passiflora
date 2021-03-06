// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * bxSlider v4.2.5
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function (a) { var b = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; a.fn.bxSlider = function (c) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { a(this).bxSlider(c) }), this; var d = {}, e = this, f = a(window).width(), g = a(window).height(); if (!a(e).data("bxSlider")) { var h = function () { a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = { index: d.settings.startSlide }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () { for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++) if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0; return !1 }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () { a(this).data("origStyle", a(this).attr("style")) }), j()) }, j = function () { var b = d.children.eq(d.settings.startSlide); e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({ width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative" }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), d.viewport.parent().css({ maxWidth: n() }), d.settings.pager || d.settings.controls || d.viewport.parent().css({ margin: "0 auto 0px" }), d.children.css({ "float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({ position: "absolute", zIndex: 0, display: "none" }), d.children.eq(d.settings.startSlide).css({ zIndex: d.settings.slideZIndex, display: "block" })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l) }, k = function (b, c) { var d = b.find('img:not([src=""]), iframe').length, e = 0; return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () { a(this).one("load error", function () { ++e === d && c() }).each(function () { this.complete && a(this).load() }) }) }, l = function () { if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) { var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone"); d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f) } d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M) }, m = function () { var b = 0, c = a(); if ("vertical" === d.settings.mode || d.settings.adaptiveHeight) if (d.carousel) { var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r(); for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++) c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i)) } else c = d.children.eq(d.active.index); else c = d.children; return "vertical" === d.settings.mode ? (c.each(function (c) { b += a(this).outerHeight() }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () { return a(this).outerHeight(!1) }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b }, n = function () { var a = "100%"; return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a }, o = function () { var a = d.settings.slideWidth, b = d.viewport.width(); if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) { if (b > d.maxThreshold) return a; b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin)) } return a }, p = function () { var a = 1, b = null; return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a }, q = function () { var a = 0, b = 0, c = 0; if (d.settings.moveSlides > 0) if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r()); else for (; b < d.children.length;)++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p(); else a = Math.ceil(d.children.length / p()); return a }, r = function () { return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p() }, s = function () { var a, b, c; d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))) }, t = function (b, c, f, g) { var h, i; d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()) }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K()) }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () { F() }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () { t(g.resetValue, "reset", 0), K() })) }, u = function () { for (var b = "", c = "", e = q(), f = 0; e > f; f++) c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>"; d.pagerEl.html(b) }, v = function () { d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D) }, w = function () { d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl)) }, x = function () { d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start") }, y = function () { d.children.each(function (b) { var c = a(this).find("img:first").attr("title"); void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>") }) }, z = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide()) }, A = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide()) }, B = function (a) { e.startAuto(), a.preventDefault() }, C = function (a) { e.stopAuto(), a.preventDefault() }, D = function (b) { var c, f; b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f))) }, E = function (b) { var c = d.children.length; return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) { a(d).find("a").eq(b).addClass("active") })) }, F = function () { if (d.settings.infiniteLoop) { var a = ""; 0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)) } d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) }, G = function (a) { d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")) }, H = function () { 1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled"))) }, I = function () { if (d.settings.autoDelay > 0) { setTimeout(e.startAuto, d.settings.autoDelay) } else e.startAuto(), a(window).focus(function () { e.startAuto() }).blur(function () { e.stopAuto() }); d.settings.autoHover && e.hover(function () { d.interval && (e.stopAuto(!0), d.autoPaused = !0) }, function () { d.autoPaused && (e.startAuto(!0), d.autoPaused = null) }) }, J = function () { var b, c, f, g, h, i, j, k, l = 0; "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () { c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0) }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j) })) : d.viewport.hover(function () { e.stop() }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j) })), K() }, K = function (a) { var b, c, f, g = a ? a : d.settings.speed, h = { left: 0, top: 0 }, i = { left: 0, top: 0 }; "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = { resetValue: c }, t(b, "ticker", g, f) }, L = function (b) { var c = a(window), d = { top: c.scrollTop(), left: c.scrollLeft() }, e = b.offset(); return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom) }, M = function (a) { var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c); if (null == f && L(e)) { if (39 === a.keyCode) return z(a), !1; if (37 === a.keyCode) return A(a), !1 } }, N = function () { d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) { d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled")) }) }, O = function (a) { if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else { d.touch.originalPos = e.position(); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b]; d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P) } }, P = function (a) { t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, Q = function (a) { var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0; 3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0)) }, R = function (a) { d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled"); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0; d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, S = function (b) { if (d.initialized) if (d.working) window.setTimeout(S, 10); else { var c = a(window).width(), h = a(window).height(); (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index)) } }, T = function (a) { var b = p(); d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false")) }, U = function (a) { return 0 > a ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a }; return e.goToSlide = function (b, c) { var f, g, h, i, j = !0, k = 0, l = { left: 0, top: 0 }, n = null; if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) { if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({ zIndex: 0 }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () { a(this).css("zIndex", d.settings.slideZIndex), F() })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r()) } }, e.goToNextSlide = function () { if (d.settings.infiniteLoop || !d.active.last) { var a = parseInt(d.active.index) + 1; e.goToSlide(a, "next") } }, e.goToPrevSlide = function () { if (d.settings.infiniteLoop || 0 !== d.active.index) { var a = parseInt(d.active.index) - 1; e.goToSlide(a, "prev") } }, e.startAuto = function (a) { d.interval || (d.interval = setInterval(function () { "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide() }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop")) }, e.stopAuto = function (a) { d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start")) }, e.getCurrentSlide = function () { return d.active.index }, e.getCurrentSlideElement = function () { return d.children.eq(d.active.index) }, e.getSlideElement = function (a) { return d.children.eq(a) }, e.getSlideCount = function () { return d.children.length }, e.isWorking = function () { return d.working }, e.redrawSlider = function () { d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r()) }, e.destroySlider = function () { d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () { void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style") }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider")) }, e.reloadSlider = function (b) { void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this) }, h(), a(e).data("bxSlider", this), this } } }(jQuery);

/*
 *  Bootstrap TouchSpin - v3.1.1
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function (a) { "use strict"; function b(a, b) { return a + ".touchspin_" + b } function c(c, d) { return a.map(c, function (a) { return b(a, d) }) } var d = 0; a.fn.TouchSpin = function (b) { if ("destroy" === b) return void this.each(function () { var b = a(this), d = b.data(); a(document).off(c(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], d.spinnerid).join(" ")) }); var e = { min: 0, max: 100, initval: "", replacementval: "", step: 1, decimals: 0, stepinterval: 100, forcestepdivisibility: "round", stepintervaldelay: 500, verticalbuttons: !1, verticalupclass: "glyphicon glyphicon-chevron-up", verticaldownclass: "glyphicon glyphicon-chevron-down", prefix: "", postfix: "", prefix_extraclass: "", postfix_extraclass: "", booster: !0, boostat: 10, maxboostedstep: !1, mousewheel: !0, buttondown_class: "btn btn-default", buttonup_class: "btn btn-default", buttondown_txt: "-", buttonup_txt: "+" }, f = { min: "min", max: "max", initval: "init-val", replacementval: "replacement-val", step: "step", decimals: "decimals", stepinterval: "step-interval", verticalbuttons: "vertical-buttons", verticalupclass: "vertical-up-class", verticaldownclass: "vertical-down-class", forcestepdivisibility: "force-step-divisibility", stepintervaldelay: "step-interval-delay", prefix: "prefix", postfix: "postfix", prefix_extraclass: "prefix-extra-class", postfix_extraclass: "postfix-extra-class", booster: "booster", boostat: "boostat", maxboostedstep: "max-boosted-step", mousewheel: "mouse-wheel", buttondown_class: "button-down-class", buttonup_class: "button-up-class", buttondown_txt: "button-down-txt", buttonup_txt: "button-up-txt" }; return this.each(function () { function g() { if (!J.data("alreadyinitialized")) { if (J.data("alreadyinitialized", !0), d += 1, J.data("spinnerid", d), !J.is("input")) return void console.log("Must be an input."); j(), h(), u(), m(), p(), q(), r(), s(), D.input.css("display", "block") } } function h() { "" !== B.initval && "" === J.val() && J.val(B.initval) } function i(a) { l(a), u(); var b = D.input.val(); "" !== b && (b = Number(D.input.val()), D.input.val(b.toFixed(B.decimals))) } function j() { B = a.extend({}, e, K, k(), b) } function k() { var b = {}; return a.each(f, function (a, c) { var d = "bts-" + c; J.is("[data-" + d + "]") && (b[a] = J.data(d)) }), b } function l(b) { B = a.extend({}, B, b) } function m() { var a = J.val(), b = J.parent(); "" !== a && (a = Number(a).toFixed(B.decimals)), J.data("initvalue", a).val(a), J.addClass("form-control"), b.hasClass("input-group") ? n(b) : o() } function n(b) { b.addClass("bootstrap-touchspin"); var c, d, e = J.prev(), f = J.next(), g = '<span class="input-group-addon bootstrap-touchspin-prefix">' + B.prefix + "</span>", h = '<span class="input-group-addon bootstrap-touchspin-postfix">' + B.postfix + "</span>"; e.hasClass("input-group-btn") ? (c = '<button class="' + B.buttondown_class + ' bootstrap-touchspin-down" type="button">' + B.buttondown_txt + "</button>", e.append(c)) : (c = '<span class="input-group-btn"><button class="' + B.buttondown_class + ' bootstrap-touchspin-down" type="button">' + B.buttondown_txt + "</button></span>", a(c).insertBefore(J)), f.hasClass("input-group-btn") ? (d = '<button class="' + B.buttonup_class + ' bootstrap-touchspin-up" type="button">' + B.buttonup_txt + "</button>", f.prepend(d)) : (d = '<span class="input-group-btn"><button class="' + B.buttonup_class + ' bootstrap-touchspin-up" type="button">' + B.buttonup_txt + "</button></span>", a(d).insertAfter(J)), a(g).insertBefore(J), a(h).insertAfter(J), C = b } function o() { var b; b = B.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + B.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + B.postfix + '</span><span class="input-group-btn-vertical"><button class="' + B.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + B.verticalupclass + '"></i></button><button class="' + B.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + B.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + B.buttondown_class + ' bootstrap-touchspin-down" type="button">' + B.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + B.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + B.postfix + '</span><span class="input-group-btn"><button class="' + B.buttonup_class + ' bootstrap-touchspin-up" type="button">' + B.buttonup_txt + "</button></span></div>", C = a(b).insertBefore(J), a(".bootstrap-touchspin-prefix", C).after(J), J.hasClass("input-sm") ? C.addClass("input-group-sm") : J.hasClass("input-lg") && C.addClass("input-group-lg") } function p() { D = { down: a(".bootstrap-touchspin-down", C), up: a(".bootstrap-touchspin-up", C), input: a("input", C), prefix: a(".bootstrap-touchspin-prefix", C).addClass(B.prefix_extraclass), postfix: a(".bootstrap-touchspin-postfix", C).addClass(B.postfix_extraclass) } } function q() { "" === B.prefix && D.prefix.hide(), "" === B.postfix && D.postfix.hide() } function r() { J.on("keydown", function (a) { var b = a.keyCode || a.which; 38 === b ? ("up" !== M && (w(), z()), a.preventDefault()) : 40 === b && ("down" !== M && (x(), y()), a.preventDefault()) }), J.on("keyup", function (a) { var b = a.keyCode || a.which; 38 === b ? A() : 40 === b && A() }), J.on("blur", function () { u() }), D.down.on("keydown", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && ("down" !== M && (x(), y()), a.preventDefault()) }), D.down.on("keyup", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && A() }), D.up.on("keydown", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && ("up" !== M && (w(), z()), a.preventDefault()) }), D.up.on("keyup", function (a) { var b = a.keyCode || a.which; (32 === b || 13 === b) && A() }), D.down.on("mousedown.touchspin", function (a) { D.down.off("touchstart.touchspin"), J.is(":disabled") || (x(), y(), a.preventDefault(), a.stopPropagation()) }), D.down.on("touchstart.touchspin", function (a) { D.down.off("mousedown.touchspin"), J.is(":disabled") || (x(), y(), a.preventDefault(), a.stopPropagation()) }), D.up.on("mousedown.touchspin", function (a) { D.up.off("touchstart.touchspin"), J.is(":disabled") || (w(), z(), a.preventDefault(), a.stopPropagation()) }), D.up.on("touchstart.touchspin", function (a) { D.up.off("mousedown.touchspin"), J.is(":disabled") || (w(), z(), a.preventDefault(), a.stopPropagation()) }), D.up.on("mouseout touchleave touchend touchcancel", function (a) { M && (a.stopPropagation(), A()) }), D.down.on("mouseout touchleave touchend touchcancel", function (a) { M && (a.stopPropagation(), A()) }), D.down.on("mousemove touchmove", function (a) { M && (a.stopPropagation(), a.preventDefault()) }), D.up.on("mousemove touchmove", function (a) { M && (a.stopPropagation(), a.preventDefault()) }), a(document).on(c(["mouseup", "touchend", "touchcancel"], d).join(" "), function (a) { M && (a.preventDefault(), A()) }), a(document).on(c(["mousemove", "touchmove", "scroll", "scrollstart"], d).join(" "), function (a) { M && (a.preventDefault(), A()) }), J.on("mousewheel DOMMouseScroll", function (a) { if (B.mousewheel && J.is(":focus")) { var b = a.originalEvent.wheelDelta || -a.originalEvent.deltaY || -a.originalEvent.detail; a.stopPropagation(), a.preventDefault(), 0 > b ? x() : w() } }) } function s() { J.on("touchspin.uponce", function () { A(), w() }), J.on("touchspin.downonce", function () { A(), x() }), J.on("touchspin.startupspin", function () { z() }), J.on("touchspin.startdownspin", function () { y() }), J.on("touchspin.stopspin", function () { A() }), J.on("touchspin.updatesettings", function (a, b) { i(b) }) } function t(a) { switch (B.forcestepdivisibility) { case "round": return (Math.round(a / B.step) * B.step).toFixed(B.decimals); case "floor": return (Math.floor(a / B.step) * B.step).toFixed(B.decimals); case "ceil": return (Math.ceil(a / B.step) * B.step).toFixed(B.decimals); default: return a } } function u() { var a, b, c; return a = J.val(), "" === a ? void ("" !== B.replacementval && (J.val(B.replacementval), J.trigger("change"))) : void (B.decimals > 0 && "." === a || (b = parseFloat(a), isNaN(b) && (b = "" !== B.replacementval ? B.replacementval : 0), c = b, b.toString() !== a && (c = b), b < B.min && (c = B.min), b > B.max && (c = B.max), c = t(c), Number(a).toString() !== c.toString() && (J.val(c), J.trigger("change")))) } function v() { if (B.booster) { var a = Math.pow(2, Math.floor(L / B.boostat)) * B.step; return B.maxboostedstep && a > B.maxboostedstep && (a = B.maxboostedstep, E = Math.round(E / a) * a), Math.max(B.step, a) } return B.step } function w() { u(), E = parseFloat(D.input.val()), isNaN(E) && (E = 0); var a = E, b = v(); E += b, E > B.max && (E = B.max, J.trigger("touchspin.on.max"), A()), D.input.val(Number(E).toFixed(B.decimals)), a !== E && J.trigger("change") } function x() { u(), E = parseFloat(D.input.val()), isNaN(E) && (E = 0); var a = E, b = v(); E -= b, E < B.min && (E = B.min, J.trigger("touchspin.on.min"), A()), D.input.val(E.toFixed(B.decimals)), a !== E && J.trigger("change") } function y() { A(), L = 0, M = "down", J.trigger("touchspin.on.startspin"), J.trigger("touchspin.on.startdownspin"), H = setTimeout(function () { F = setInterval(function () { L++, x() }, B.stepinterval) }, B.stepintervaldelay) } function z() { A(), L = 0, M = "up", J.trigger("touchspin.on.startspin"), J.trigger("touchspin.on.startupspin"), I = setTimeout(function () { G = setInterval(function () { L++, w() }, B.stepinterval) }, B.stepintervaldelay) } function A() { switch (clearTimeout(H), clearTimeout(I), clearInterval(F), clearInterval(G), M) { case "up": J.trigger("touchspin.on.stopupspin"), J.trigger("touchspin.on.stopspin"); break; case "down": J.trigger("touchspin.on.stopdownspin"), J.trigger("touchspin.on.stopspin") } L = 0, M = !1 } var B, C, D, E, F, G, H, I, J = a(this), K = J.data(), L = 0, M = !1; g() }) } }(jQuery);

/*
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) {
    var e = -1, o = -1, i = function (t) { return parseFloat(t) || 0 }, n = function (e) { var o = 1, n = t(e), a = null, r = []; return n.each(function () { var e = t(this), n = e.offset().top - i(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(a - n)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), a = n }), r }, a = function (e) {
        var o = {
            byRow: !0, property: "height", target: null, remove: !1
        }; return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
    }, r = t.fn.matchHeight = function (e) { var o = a(e); if (o.remove) { var i = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(i) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) }; r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
    r._afterUpdate = null, r._rows = n, r._parse = i, r._parseOptions = a, r._apply = function (e, o) {
        var s = a(o), h = t(e), c = [h], l = t(window).scrollTop(), p = t("html").outerHeight(!0), d = h.parents().filter(":hidden"); return d.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
            var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: o, "padding-top": "0",
                "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden"
            })
        }), c = n(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(c, function (e, o) {
            var n = t(o), a = 0; if (s.target) a = s.target.outerHeight(!1); else {
                if (s.byRow && n.length <= 1) return void n.css(s.property, ""); n.each(function () {
                    var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"); var i = { display: o }; i[s.property] = "",
                    e.css(i), e.outerHeight(!1) > a && (a = e.outerHeight(!1)), e.css("display", "")
                })
            } n.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, a - o + "px")) })
        }), d.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
    }, r._applyDataApi = function () {
        var e = {}; t("[data-match-height], [data-mh]").each(function () { var o = t(this), i = o.attr("data-mh") || o.attr("data-match-height"); i in e ? e[i] = e[i].add(o) : e[i] = o }), t.each(e, function () { this.matchHeight(!0) })
    }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (i, n) {
        if (n && "resize" === n.type) { var a = t(window).width(); if (a === e) return; e = a } i ? -1 === o && (o = setTimeout(function () {
            s(n), o = -1
        }, r._throttle)) : s(n)
    }, t(r._applyDataApi), t(window).bind("load", function (t) { r._update(!1, t) }), t(window).bind("resize orientationchange", function (t) { r._update(!0, t) })
});

/*! Selectric ϟ v1.9.5 (2016-02-26) - git.io/tjl9sQ - Copyright (c) 2016 Leonardo Santos - Dual licensed: MIT/GPL */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, o) { return void 0 === o && (o = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(o), o } : e(jQuery) }(function (e) { "use strict"; var t = "selectric", o = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel", i = ".sl", s = { onChange: function (t) { e(t).change() }, maxHeight: 300, keySearchTimeout: 500, arrowButtonMarkup: '<b class="button">&#x25be;</b>', disableOnMobile: !0, openOnHover: !1, hoverIntentTimeout: 500, expandToItemText: !1, responsive: !1, preventWindowScroll: !0, inheritOriginalWidth: !1, allowWrap: !0, customClass: { prefix: t, camelCase: !1, overwrite: !0 }, optionsItemBuilder: "{text}", labelBuilder: "{text}" }, n = { add: function (e, t, o) { this[e] || (this[e] = {}), this[e][t] = o }, remove: function (e, t) { delete this[e][t] } }, l = { replaceDiacritics: function (e) { for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), o = t.length; o--;) e = e.toLowerCase().replace(RegExp("[" + t[o] + "]", "g"), "aeiouncy".charAt(o)); return e }, format: function (e) { var t = arguments; return ("" + e).replace(/{(\d+|(\w+))}/g, function (e, o, i) { return i && t[1] ? t[1][i] : t[o] }) }, nextEnabledItem: function (e, t) { for (; e[t = (t + 1) % e.length].disabled;); return t }, previousEnabledItem: function (e, t) { for (; e[t = (t > 0 ? t : e.length) - 1].disabled;); return t }, toDash: function (e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }, triggerCallback: function (o, i) { var s = i.element, a = i.options["on" + o]; e.isFunction(a) && a.call(s, s, i), n[o] && e.each(n[o], function () { this.call(s, s, i) }), e(s).trigger(t + "-" + l.toDash(o), i) } }, a = e(document), r = e(window), c = function (n, c) { function d(t) { if (A.options = e.extend(!0, {}, s, A.options, t), A.classes = {}, A.element = n, l.triggerCallback("BeforeInit", A), A.options.disableOnMobile && R) return void (A.disableOnMobile = !0); C(!0); var i = A.options.customClass, a = o.split(" "), r = $.width(); e.each(a, function (e, t) { var o = i.prefix + "-" + t; A.classes[t.toLowerCase()] = i.camelCase ? o : l.toDash(o) }), x = e("<input/>", { "class": A.classes.input, readonly: R }), k = e("<div/>", { "class": A.classes.items, tabindex: -1 }), T = e("<div/>", { "class": A.classes.scroll }), y = e("<div/>", { "class": i.prefix, html: A.options.arrowButtonMarkup }), D = e('<p class="label"/>'), I = $.wrap("<div>").parent().append(y.prepend(D), k, x), q = { open: m, close: g, destroy: C, refresh: u, init: d }, $.on(q).wrap('<div class="' + A.classes.hideselect + '">'), e.extend(A, q), E = A.options.labelBuilder, A.options.inheritOriginalWidth && r > 0 && I.width(r), p() } function p() { A.items = []; var t = $.children(), o = "<ul>", s = $.find("option"), n = s.index(s.filter(":selected")), a = 0; B = S = ~n ? n : 0, (M = t.length) && (t.each(function () { function t() { var t = e(this), i = t.html(), s = t.prop("disabled"), n = A.options.optionsItemBuilder; A.items[a] = { element: t, value: t.val(), text: i, slug: l.replaceDiacritics(i), disabled: s }, o += l.format('<li data-index="{1}" class="{2}">{3}</li>', a, e.trim([a == B ? "selected" : "", a == M - 1 ? "last" : "", s ? "disabled" : ""].join(" ")), e.isFunction(n) ? n(A.items[a], t, a) : l.format(n, A.items[a])), a++ } var i = e(this); if (i.is("optgroup")) { var s = i.prop("disabled"), n = i.children(); o += l.format('<ul class="{1}"><li class="{2}">{3}</li>', e.trim([A.classes.group, s ? "disabled" : "", i.prop("class")].join(" ")), A.classes.grouplabel, i.prop("label")), s && n.prop("disabled", !0), n.each(t), o += "</ul>" } else t.call(i) }), k.append(T.html(o + "</ul>")), D.html(e.isFunction(E) ? E(A.items[B]) : l.format(E, A.items[B]))), y.add($).add(I).add(x).off(i), I.prop("class", [A.classes.wrapper, A.options.customClass.overwrite ? $.prop("class").replace(/\S+/g, A.options.customClass.prefix + "-$&") : $.prop("class"), A.options.responsive ? A.classes.responsive : ""].join(" ")), $.prop("disabled") ? (I.addClass(A.classes.disabled), x.prop("disabled", !0)) : (L = !0, I.removeClass(A.classes.disabled).on("mouseenter" + i + " mouseleave" + i, function (t) { e(this).toggleClass(A.classes.hover), A.options.openOnHover && (clearTimeout(A.closeTimer), "mouseleave" == t.type ? A.closeTimer = setTimeout(g, A.options.hoverIntentTimeout) : m()) }), y.on("click" + i, function (e) { F ? g() : m(e) }), x.prop({ tabindex: Y, disabled: !1 }).on("keypress" + i, f).on("keydown" + i, function (e) { f(e), clearTimeout(A.resetStr), A.resetStr = setTimeout(function () { x.val("") }, A.options.keySearchTimeout); var t = e.keyCode || e.which; if (t > 36 && 41 > t) { if (!A.options.allowWrap && (39 > t && 0 == S || t > 38 && S + 1 == A.items.length)) return; b(l[(39 > t ? "previous" : "next") + "EnabledItem"](A.items, S)) } }).on("focusin" + i, function (e) { x.one("blur", function () { x.blur() }), F || m(e) }).on("oninput" in x[0] ? "input" : "keyup", function () { x.val().length && e.each(A.items, function (e, t) { return RegExp("^" + x.val(), "i").test(t.slug) && !t.disabled ? (b(e), !1) : void 0 }) }), $.prop("tabindex", !1), O = e("li", k.removeAttr("style")).on({ mousedown: function (e) { e.preventDefault(), e.stopPropagation() }, click: function () { return b(e(this).data("index"), !0), !1 } }).filter("[data-index]")), l.triggerCallback("Init", A) } function u() { l.triggerCallback("Refresh", A), p() } function f(e) { var t = e.keyCode || e.which; 13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0)) } function h() { var e = k.closest(":visible").children(":hidden").addClass(A.classes.tempshow), t = A.options.maxHeight, o = k.outerWidth(), i = y.outerWidth() - (o - k.width()); !A.options.expandToItemText || i > o ? j = i : (k.css("overflow", "scroll"), I.width(9e4), j = k.width(), k.css("overflow", ""), I.width("")), k.width(j).height() > t && k.height(t), e.removeClass(A.classes.tempshow) } function m(o) { l.triggerCallback("BeforeOpen", A), o && (o.preventDefault(), o.stopPropagation()), L && (h(), e("." + A.classes.hideselect, "." + A.classes.open).children()[t]("close"), F = !0, H = k.outerHeight(), W = k.height(), I.addClass(A.classes.open), x.val("").is(":focus") || x.focus(), a.on("click" + i, g).on("scroll" + i, v), v(), A.options.preventWindowScroll && a.on("mousewheel" + i + " DOMMouseScroll" + i, "." + A.classes.scroll, function (t) { var o = t.originalEvent, i = e(this).scrollTop(), s = 0; "detail" in o && (s = -1 * o.detail), "wheelDelta" in o && (s = o.wheelDelta), "wheelDeltaY" in o && (s = o.wheelDeltaY), "deltaY" in o && (s = -1 * o.deltaY), (i == this.scrollHeight - W && 0 > s || 0 == i && s > 0) && t.preventDefault() }), w(S), l.triggerCallback("Open", A)) } function v() { I.toggleClass(A.classes.above, I.offset().top + I.outerHeight() + H > r.scrollTop() + r.height()) } function g() { if (l.triggerCallback("BeforeClose", A), B != S) { l.triggerCallback("BeforeChange", A); var t = A.items[S].text; $.prop("selectedIndex", B = S).data("value", t), D.html(e.isFunction(E) ? E(A.items[S]) : l.format(E, A.items[S])), l.triggerCallback("Change", A) } a.off(i), I.removeClass(A.classes.open), F = !1, l.triggerCallback("Close", A) } function b(e, t) { void 0 != e && (A.items[e].disabled || (O.removeClass("selected").eq(S = e).addClass("selected"), w(e), t && g())) } function w(e) { var t = O.eq(e).outerHeight(), o = O[e].offsetTop, i = T.scrollTop(), s = o + 2 * t; T.scrollTop(s > i + H ? s - H : i > o - t ? o - t : i) } function C(e) { L && (k.add(y).add(x).remove(), !e && $.removeData(t).removeData("value"), $.prop("tabindex", Y).off(i).off(q).unwrap().unwrap(), L = !1) } var x, k, T, y, D, I, O, S, B, H, W, j, M, q, E, A = this, $ = e(n), F = !1, L = !1, R = /android|ip(hone|od|ad)/i.test(navigator.userAgent), Y = $.prop("tabindex"); d(c) }; e.fn[t] = function (o) { return this.each(function () { var i = e.data(this, t); i && !i.disableOnMobile ? "" + o === o && i[o] ? i[o]() : i.init(o) : e.data(this, t, new c(this, o)) }) }, e.fn[t].hooks = n });

/* nouislider - 8.0.2 - 2015-07-06 13:22:09 */
/* http://refreshless.com/nouislider */

!function (a) { if ("function" == typeof define && define.amd) define([], a); else if ("object" == typeof exports) { var b = require("fs"); module.exports = a(), module.exports.css = function () { return b.readFileSync(__dirname + "/nouislider.min.css", "utf8") } } else window.noUiSlider = a() }(function () { "use strict"; function a(a) { return a.filter(function (a) { return this[a] ? !1 : this[a] = !0 }, {}) } function b(a, b) { return Math.round(a / b) * b } function c(a) { var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.defaultView || c.parentWindow, e = c.documentElement, f = d.pageXOffset; return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f = 0), { top: b.top + d.pageYOffset - e.clientTop, left: b.left + f - e.clientLeft } } function d(a) { return "number" == typeof a && !isNaN(a) && isFinite(a) } function e(a) { var b = Math.pow(10, 7); return Number((Math.round(a * b) / b).toFixed(7)) } function f(a, b, c) { j(a, b), setTimeout(function () { k(a, b) }, c) } function g(a) { return Math.max(Math.min(a, 100), 0) } function h(a) { return Array.isArray(a) ? a : [a] } function i(a) { var b = a.split("."); return b.length > 1 ? b[1].length : 0 } function j(a, b) { a.classList ? a.classList.add(b) : a.className += " " + b } function k(a, b) { a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ") } function l(a, b) { a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className) } function m(a, b) { return 100 / (b - a) } function n(a, b) { return 100 * b / (a[1] - a[0]) } function o(a, b) { return n(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]) } function p(a, b) { return b * (a[1] - a[0]) / 100 + a[0] } function q(a, b) { for (var c = 1; a >= b[c];) c += 1; return c } function r(a, b, c) { if (c >= a.slice(-1)[0]) return 100; var d, e, f, g, h = q(c, a); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + o([d, e], c) / m(f, g) } function s(a, b, c) { if (c >= 100) return a.slice(-1)[0]; var d, e, f, g, h = q(c, b); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], p([d, e], (c - f) * m(f, g)) } function t(a, c, d, e) { if (100 === e) return e; var f, g, h = q(e, a); return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e } function u(a, b, c) { var e; if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value."); if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric."); c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]) } function v(a, b, c) { return b ? void (c.xSteps[a] = n([c.xVal[a], c.xVal[a + 1]], b) / m(c.xPct[a], c.xPct[a + 1])) : !0 } function w(a, b, c, d) { this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c; var e, f = []; for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]); for (f.sort(function (a, b) { return a[0] - b[0] }), e = 0; e < f.length; e++) u(f[e][1], f[e][0], this); for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) v(e, this.xNumSteps[e], this) } function x(a, b) { if (!d(b)) throw new Error("noUiSlider: 'step' is not numeric."); a.singleStep = b } function y(a, b) { if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object."); if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'."); a.spectrum = new w(b, a.snap, a.dir, a.singleStep) } function z(a, b) { if (b = h(b), !Array.isArray(b) || !b.length || b.length > 2) throw new Error("noUiSlider: 'start' option is incorrect."); a.handles = b.length, a.start = b } function A(a, b) { if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.") } function B(a, b) { if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.") } function C(a, b) { if ("lower" === b && 1 === a.handles) a.connect = 1; else if ("upper" === b && 1 === a.handles) a.connect = 2; else if (b === !0 && 2 === a.handles) a.connect = 3; else { if (b !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); a.connect = 0 } } function D(a, b) { switch (b) { case "horizontal": a.ort = 0; break; case "vertical": a.ort = 1; break; default: throw new Error("noUiSlider: 'orientation' option is invalid.") } } function E(a, b) { if (!d(b)) throw new Error("noUiSlider: 'margin' option must be numeric."); if (a.margin = a.spectrum.getMargin(b), !a.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.") } function F(a, b) { if (!d(b)) throw new Error("noUiSlider: 'limit' option must be numeric."); if (a.limit = a.spectrum.getMargin(b), !a.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.") } function G(a, b) { switch (b) { case "ltr": a.dir = 0; break; case "rtl": a.dir = 1, a.connect = [0, 2, 1, 3][a.connect]; break; default: throw new Error("noUiSlider: 'direction' option was not recognized.") } } function H(a, b) { if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options."); var c = b.indexOf("tap") >= 0, d = b.indexOf("drag") >= 0, e = b.indexOf("fixed") >= 0, f = b.indexOf("snap") >= 0; a.events = { tap: c || f, drag: d, fixed: e, snap: f } } function I(a, b) { if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0; throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.") } function J(a) { var b, c = { margin: 0, limit: 0, animate: !0, format: U }; b = { step: { r: !1, t: x }, start: { r: !0, t: z }, connect: { r: !0, t: C }, direction: { r: !0, t: G }, snap: { r: !1, t: A }, animate: { r: !1, t: B }, range: { r: !0, t: y }, orientation: { r: !1, t: D }, margin: { r: !1, t: E }, limit: { r: !1, t: F }, behaviour: { r: !0, t: H }, format: { r: !1, t: I } }; var d = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal" }; return Object.keys(d).forEach(function (b) { void 0 === a[b] && (a[b] = d[b]) }), Object.keys(b).forEach(function (d) { var e = b[d]; if (void 0 === a[d]) { if (e.r) throw new Error("noUiSlider: '" + d + "' is required."); return !0 } e.t(c, a[d]) }), c.pips = a.pips, c.style = c.ort ? "top" : "left", c } function K(a, b, c) { var d = a + b[0], e = a + b[1]; return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [g(d), g(e)]) : [d, e] } function L(a) { a.preventDefault(); var b, c, d = 0 === a.type.indexOf("touch"), e = 0 === a.type.indexOf("mouse"), f = 0 === a.type.indexOf("pointer"), g = a; return 0 === a.type.indexOf("MSPointer") && (f = !0), d && (b = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY), (e || f) && (b = a.clientX + window.pageXOffset, c = a.clientY + window.pageYOffset), g.points = [b, c], g.cursor = e || f, g } function M(a, b) { var c = document.createElement("div"), d = document.createElement("div"), e = ["-lower", "-upper"]; return a && e.reverse(), j(d, T[3]), j(d, T[3] + e[b]), j(c, T[2]), c.appendChild(d), c } function N(a, b, c) { switch (a) { case 1: j(b, T[7]), j(c[0], T[6]); break; case 3: j(c[1], T[6]); case 2: j(c[0], T[7]); case 0: j(b, T[6]) } } function O(a, b, c) { var d, e = []; for (d = 0; a > d; d += 1) e.push(c.appendChild(M(b, d))); return e } function P(a, b, c) { j(c, T[0]), j(c, T[8 + a]), j(c, T[4 + b]); var d = document.createElement("div"); return j(d, T[1]), c.appendChild(d), d } function Q(b, d) { function e(a, b, c) { if ("range" === a || "steps" === a) return M.xVal; if ("count" === a) { var d, e = 100 / (b - 1), f = 0; for (b = []; (d = f++ * e) <= 100;) b.push(d); a = "positions" } return "positions" === a ? b.map(function (a) { return M.fromStepping(c ? M.getStep(a) : a) }) : "values" === a ? c ? b.map(function (a) { return M.fromStepping(M.getStep(M.toStepping(a))) }) : b : void 0 } function m(b, c, d) { var e = M.direction, f = {}, g = M.xVal[0], h = M.xVal[M.xVal.length - 1], i = !1, j = !1, k = 0; return M.direction = 0, d = a(d.slice().sort(function (a, b) { return a - b })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function (a, e) { var g, h, l, m, n, o, p, q, r, s, t = a, u = d[e + 1]; if ("steps" === c && (g = M.xNumSteps[e]), g || (g = u - t), t !== !1 && void 0 !== u) for (h = t; u >= h; h += g) { for (m = M.toStepping(h), n = m - k, q = n / b, r = Math.round(q), s = n / r, l = 1; r >= l; l += 1) o = k + l * s, f[o.toFixed(5)] = ["x", 0]; p = d.indexOf(h) > -1 ? 1 : "steps" === c ? 2 : 0, !e && i && (p = 0), h === u && j || (f[m.toFixed(5)] = [h, p]), k = m } }), M.direction = e, f } function n(a, b, c) { function e(a) { return ["-normal", "-large", "-sub"][a] } function f(a, b, c) { return 'class="' + b + " " + b + "-" + h + " " + b + e(c[1]) + '" style="' + d.style + ": " + a + '%"' } function g(a, d) { M.direction && (a = 100 - a), d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i.innerHTML += "<div " + f(a, "noUi-marker", d) + "></div>", d[1] && (i.innerHTML += "<div " + f(a, "noUi-value", d) + ">" + c.to(d[0]) + "</div>") } var h = ["horizontal", "vertical"][d.ort], i = document.createElement("div"); return j(i, "noUi-pips"), j(i, "noUi-pips-" + h), Object.keys(a).forEach(function (b) { g(b, a[b]) }), i } function o(a) { var b = a.mode, c = a.density || 1, d = a.filter || !1, f = a.values || !1, g = a.stepped || !1, h = e(b, f, g), i = m(c, b, h), j = a.format || { to: Math.round }; return I.appendChild(n(i, d, j)) } function p() { return G["offset" + ["Width", "Height"][d.ort]] } function q(a, b) { void 0 !== b && (b = Math.abs(b - d.dir)), Object.keys(R).forEach(function (c) { var d = c.split(".")[0]; a === d && R[c].forEach(function (a) { a(h(B()), b, r(Array.prototype.slice.call(Q))) }) }) } function r(a) { return 1 === a.length ? a[0] : d.dir ? a.reverse() : a } function s(a, b, c, e) { var f = function (b) { return I.hasAttribute("disabled") ? !1 : l(I, T[14]) ? !1 : (b = L(b), a === S.start && void 0 !== b.buttons && b.buttons > 1 ? !1 : (b.calcPoint = b.points[d.ort], void c(b, e))) }, g = []; return a.split(" ").forEach(function (a) { b.addEventListener(a, f, !1), g.push([a, f]) }), g } function t(a, b) { var c, d, e = b.handles || H, f = !1, g = 100 * (a.calcPoint - b.start) / p(), h = e[0] === H[0] ? 0 : 1; if (c = K(g, b.positions, e.length > 1), f = y(e[0], c[h], 1 === e.length), e.length > 1) { if (f = y(e[1], c[h ? 0 : 1], !1) || f) for (d = 0; d < b.handles.length; d++) q("slide", d) } else f && q("slide", h) } function u(a, b) { var c = G.getElementsByClassName(T[15]), d = b.handles[0] === H[0] ? 0 : 1; c.length && k(c[0], T[15]), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)); var e = document.documentElement; e.noUiListeners.forEach(function (a) { e.removeEventListener(a[0], a[1]) }), k(I, T[12]), q("set", d), q("change", d) } function v(a, b) { var c = document.documentElement; if (1 === b.handles.length && (j(b.handles[0].children[0], T[15]), b.handles[0].hasAttribute("disabled"))) return !1; a.stopPropagation(); var d = s(S.move, c, t, { start: a.calcPoint, handles: b.handles, positions: [J[0], J[H.length - 1]] }), e = s(S.end, c, u, { handles: b.handles }); if (c.noUiListeners = d.concat(e), a.cursor) { document.body.style.cursor = getComputedStyle(a.target).cursor, H.length > 1 && j(I, T[12]); var f = function () { return !1 }; document.body.noUiListener = f, document.body.addEventListener("selectstart", f, !1) } } function w(a) { var b, e, g = a.calcPoint, h = 0; return a.stopPropagation(), H.forEach(function (a) { h += c(a)[d.style] }), b = h / 2 > g || 1 === H.length ? 0 : 1, g -= c(G)[d.style], e = 100 * g / p(), d.events.snap || f(I, T[14], 300), H[b].hasAttribute("disabled") ? !1 : (y(H[b], e), q("slide", b), q("set", b), q("change", b), void (d.events.snap && v(a, { handles: [H[h]] }))) } function x(a) { var b, c; if (!a.fixed) for (b = 0; b < H.length; b += 1) s(S.start, H[b].children[0], v, { handles: [H[b]] }); a.tap && s(S.start, G, w, { handles: H }), a.drag && (c = [G.getElementsByClassName(T[7])[0]], j(c[0], T[10]), a.fixed && c.push(H[c[0] === H[0] ? 1 : 0].children[0]), c.forEach(function (a) { s(S.start, a, v, { handles: H }) })) } function y(a, b, c) { var e = a !== H[0] ? 1 : 0, f = J[0] + d.margin, h = J[1] - d.margin, i = J[0] + d.limit, l = J[1] - d.limit; return H.length > 1 && (b = e ? Math.max(b, f) : Math.min(b, h)), c !== !1 && d.limit && H.length > 1 && (b = e ? Math.min(b, i) : Math.max(b, l)), b = M.getStep(b), b = g(parseFloat(b.toFixed(7))), b === J[e] ? !1 : (a.style[d.style] = b + "%", a.previousSibling || (k(a, T[17]), b > 50 && j(a, T[17])), J[e] = b, Q[e] = M.fromStepping(b), q("update", e), !0) } function z(a, b) { var c, e, f; for (d.limit && (a += 1), c = 0; a > c; c += 1) e = c % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = d.format.from(f), (f === !1 || isNaN(f) || y(H[e], M.toStepping(f), c === 3 - d.dir) === !1) && q("update", e)) } function A(a) { var b, c, e = h(a); for (d.dir && d.handles > 1 && e.reverse(), d.animate && -1 !== J[0] && f(I, T[14], 300), b = H.length > 1 ? 3 : 1, 1 === e.length && (b = 1), z(b, e), c = 0; c < H.length; c++) q("set", c) } function B() { var a, b = []; for (a = 0; a < d.handles; a += 1) b[a] = d.format.to(Q[a]); return r(b) } function C() { T.forEach(function (a) { a && k(I, a) }), I.innerHTML = "", delete I.noUiSlider } function D() { var a = J.map(function (a, b) { var c = M.getApplicableStep(a), d = i(String(c[2])), e = Q[b], f = 100 === a ? null : c[2], g = Number((e - c[2]).toFixed(d)), h = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1; return [h, f] }); return r(a) } function E(a, b) { R[a] = R[a] || [], R[a].push(b), "update" === a.split(".")[0] && H.forEach(function (a, b) { q("update", b) }) } function F(a) { var b = a.split(".")[0], c = a.substring(b.length); Object.keys(R).forEach(function (a) { var d = a.split(".")[0], e = a.substring(d.length); b && b !== d || c && c !== e || delete R[a] }) } var G, H, I = b, J = [-1, -1], M = d.spectrum, Q = [], R = {}; if (I.noUiSlider) throw new Error("Slider was already initialized."); return G = P(d.dir, d.ort, I), H = O(d.handles, d.dir, G), N(d.connect, I, H), x(d.events), d.pips && o(d.pips), { destroy: C, steps: D, on: E, off: F, get: B, set: A } } function R(a, b) { if (!a.nodeName) throw new Error("noUiSlider.create requires a single element."); var c = J(b, a), d = Q(a, c); d.set(c.start), a.noUiSlider = d } var S = window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" }, T = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"]; w.prototype.getMargin = function (a) { return 2 === this.xPct.length ? n(this.xVal, a) : !1 }, w.prototype.toStepping = function (a) { return a = r(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a }, w.prototype.fromStepping = function (a) { return this.direction && (a = 100 - a), e(s(this.xVal, this.xPct, a)) }, w.prototype.getStep = function (a) { return this.direction && (a = 100 - a), a = t(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a }, w.prototype.getApplicableStep = function (a) { var b = q(a, this.xPct), c = 100 === a ? 2 : 1; return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]] }, w.prototype.convert = function (a) { return this.getStep(this.toStepping(a)) }; var U = { to: function (a) { return a.toFixed(2) }, from: Number }; return { create: R } });

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) { var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function (a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function () { return this.trigger("unmask") }, mask: function (c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function () { function h() { if (g.completed) { for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return; g.completed.call(B) } } function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) } function q(a) { for (; ++a < n && !j[a];); return a } function r(a) { for (; --a >= 0 && !j[a];); return a } function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b) ; n > c; c++) if (j[c]) { if (!(n > d && j[c].test(C[d]))) break; C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } } function t(a) { var b, c, d, e; for (b = a, c = p(a) ; n > b; b++) if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break; c = e } } function u() { var a = B.val(), b = B.caret(); if (o && o.length && o.length > a.length) { for (A(!0) ; b.begin > 0 && !j[b.begin - 1];) b.begin--; if (0 === b.begin) for (; b.begin < l && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } else { for (A(!0) ; b.begin < n && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } h() } function v() { A(), B.val() != E && B.change() } function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode; o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } } function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode, i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function () { a.proxy(a.fn.caret, B, e)() }; setTimeout(k, 0) } else B.caret(e); i.begin <= m && h() } b.preventDefault() } } } function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) } function z() { B.val(C.join("")) } function A(a) { var b, c, d, e = B.val(), f = -1; for (b = 0, d = 0; n > b; b++) if (j[b]) { for (C[b] = p(b) ; d++ < e.length;) if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++, k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this), C = a.map(c.split(""), function (a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }), D = C.join(""), E = B.val(); B.data(a.mask.dataName, function () { return a.map(C, function (a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function () { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { if (!B.prop("readonly")) { clearTimeout(b); var a; E = B.val(), a = A(), b = setTimeout(function () { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () { B.prop("readonly") || setTimeout(function () { var a = A(!0); B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });

/*!
	Zoom 1.7.14
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function ($) { var defaults = { url: false, callback: false, target: false, duration: 120, on: "mouseover", touch: true, onZoomIn: false, onZoomOut: false, magnify: 1 }; $.zoom = function (target, source, img, magnify) { var targetHeight, targetWidth, sourceHeight, sourceWidth, xRatio, yRatio, offset, $target = $(target), position = $target.css("position"), $source = $(source); $target.css("position", /(absolute|fixed)/.test(position) ? position : "relative"); $target.css("overflow", "hidden"); img.style.width = img.style.height = ""; $(img).addClass("zoomImg").css({ position: "absolute", top: 0, left: 0, opacity: 0, width: img.width * magnify, height: img.height * magnify, border: "none", maxWidth: "none", maxHeight: "none" }).appendTo(target); return { init: function () { targetWidth = $target.outerWidth(); targetHeight = $target.outerHeight(); if (source === $target[0]) { sourceWidth = targetWidth; sourceHeight = targetHeight } else { sourceWidth = $source.outerWidth(); sourceHeight = $source.outerHeight() } xRatio = (img.width - targetWidth) / sourceWidth; yRatio = (img.height - targetHeight) / sourceHeight; offset = $source.offset() }, move: function (e) { var left = e.pageX - offset.left, top = e.pageY - offset.top; top = Math.max(Math.min(top, sourceHeight), 0); left = Math.max(Math.min(left, sourceWidth), 0); img.style.left = left * -xRatio + "px"; img.style.top = top * -yRatio + "px" } } }; $.fn.zoom = function (options) { return this.each(function () { var settings = $.extend({}, defaults, options || {}), target = settings.target || this, source = this, $source = $(source), $target = $(target), img = document.createElement("img"), $img = $(img), mousemove = "mousemove.zoom", clicked = false, touched = false, $urlElement; if (!settings.url) { $urlElement = $source.find("img"); if ($urlElement[0]) { settings.url = $urlElement.data("src") || $urlElement.attr("src") } if (!settings.url) { return } } (function () { var position = $target.css("position"); var overflow = $target.css("overflow"); $source.one("zoom.destroy", function () { $source.off(".zoom"); $target.css("position", position); $target.css("overflow", overflow); $img.remove() }) })(); img.onload = function () { var zoom = $.zoom(target, source, img, settings.magnify); function start(e) { zoom.init(); zoom.move(e); $img.stop().fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false) } function stop() { $img.stop().fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false) } if (settings.on === "grab") { $source.on("mousedown.zoom", function (e) { if (e.which === 1) { $(document).one("mouseup.zoom", function () { stop(); $(document).off(mousemove, zoom.move) }); start(e); $(document).on(mousemove, zoom.move); e.preventDefault() } }) } else if (settings.on === "click") { $source.on("click.zoom", function (e) { if (clicked) { return } else { clicked = true; start(e); $(document).on(mousemove, zoom.move); $(document).one("click.zoom", function () { stop(); clicked = false; $(document).off(mousemove, zoom.move) }); return false } }) } else if (settings.on === "toggle") { $source.on("click.zoom", function (e) { if (clicked) { stop() } else { start(e) } clicked = !clicked }) } else if (settings.on === "mouseover") { zoom.init(); $source.on("mouseenter.zoom", start).on("mouseleave.zoom", stop).on(mousemove, zoom.move) } if (settings.touch) { $source.on("touchstart.zoom", function (e) { e.preventDefault(); if (touched) { touched = false; stop() } else { touched = true; start(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]) } }).on("touchmove.zoom", function (e) { e.preventDefault(); zoom.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]) }) } if ($.isFunction(settings.callback)) { settings.callback.call(img) } }; img.src = settings.url }) }; $.fn.zoom.defaults = defaults })(window.jQuery);


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
// Запускаем бутстрап-тултипы

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

    //
    // Запускаем бутстрап-тултипы
    //---------------------------------------------------------------------------------------
    $('[data-toggle="tooltip"]').tooltip();
 
});
