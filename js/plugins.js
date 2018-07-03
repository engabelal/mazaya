/*global $, alert, console*/

$(function () {

    'use strict';
    //Page loading------------------------------------------------------

//    $(window).onload(function () {
//        //        console.log("document loaded");
//        //        console.log("after load");
//        $("body").css("overflow", "auto");
//
//        //    Loading Elements
//        //        console.log("after fade 0");
//        $(".loading .sk-cube-grid").fadeOut(1000, function () {
//
//
//            $(this).parent().fadeOut(1000, function () {
//
//
//                $(this).remove();
//                //                console.log("after fade 2");
//            });
//        });
//    });
    window.onload = function () {
         $("body").css("overflow", "auto");

        //    Loading Elements
        //        console.log("after fade 0");
        $(".loading .sk-cube-grid").fadeOut(1000, function () {


            $(this).parent().fadeOut(1000, function () {


                $(this).remove();
                //                console.log("after fade 2");
            });
        });
    }();
    // Adjust Header Height -------------------------------------

    var winh = $(window).height(),
        //            upperh = $('.before-nav').innerHeight(),
        //            searchh =$('.search').innerHeight(),
        navh = $('.mainNav').innerHeight();
    //        if (screen.width >= 600) {
    $('.mainslider .carousel ,.mainslider .carousel-inner ,.mainslider .carousel-item').height(winh);
    //        }
    $(window).resize(function () {
        $('.mainslider .carousel ,.mainslider .carousel-inner ,.mainslider .carousel-item').height(winh);
    });
    $('.mainslider .carousel').carousel({
        interval: 5000
    });

    // Links Add Active Class -------------------------------------

    $('.navbar-nav li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');


    });
    //End Links Add Active Clas

    //Change Navbar color ----------------------------------------------
    function checkScroll() {
        var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

        if ($(window).scrollTop() >= startY) {
            $('.navbar').addClass("scrolled").removeClass('bg-light');
        } else {
            $('.navbar').removeClass("scrolled").addClass('bg-light');
        }
    }

    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function () {
            checkScroll();
        });
    }
    //End Change Navbar color

    //    Nice scrol -----------------
    $("body").niceScroll({
        cursorcolor: "#FE7903",
        cursorwidth: "10px",
        cursorborder: "none",
        scrollspeed: 60,
        autohidemode: true,
        hidecursordelay: 400,
        cursorfixedheight: false,
        cursorminheight: 20,
        enablekeyboard: true,
        horizrailenabled: true,
        bouncescroll: false,
        smoothscroll: true,
        iframeautoresize: true,
        touchbehavior: false,
        zindex: 999

        //        scrollspeed: 100
    });


});
