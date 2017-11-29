/*global $, alert, console, mixer */
$(function () {
    'use strict';
    
    $('.nav-icon').click(function () {
        $('aside .side-bar').toggleClass('d-none');
        $('aside').toggleClass('show').toggleClass('d-none');
        $('aside li a i').toggleClass('d-none');
    });
    
    $('aside li a').click(function () {
       
        $(this).addClass('active');
        $('aside li a').not(this).removeClass('active');
        $('aside').toggleClass('d-none').removeClass('show');
        $('aside .side-bar').toggleClass('d-none');
        $('aside li a i').removeClass('d-none');
    });
    
    $(window).resize(function () {
        $('aside').addClass('d-none').removeClass('show');
        $('aside .side-bar').addClass('d-none');
        $('aside li a i').removeClass('d-none');
    });
    
    $('aside li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top + 40
        }, 1500);
    });
    $('button').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top + 40
        }, 1000);
    });
    
    $('.skills .progress-pirsent span').fadeOut();
    var scroll = $(this).scrollTop(),
        offset = $('.skills').offset().top;
    if (scroll >= offset) {
        $('.skills .progress-pirsent span').fadeIn().css({"animation": "skills 2s ease-in-out"});
    }
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.skills').offset().top;
        if (scroll >= offset) {
            $('.skills .progress-pirsent span').fadeIn().css({"animation": "skills 2s ease-in-out"});
        }
    });
    

    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.works').offset().top;
        if (scroll >= offset - 500) {
            $('.works .works-imgs').fadeIn().addClass('animated fadeInRight');
        }
    });
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('#home').offset().top;
        if (scroll >= offset - 300) {
            $('#home-b').addClass('active');
            $('aside li a').not('#home-b').removeClass('active');
            $('.scroll-bar').scrollTop(0);
        }
    });
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.about').offset().top;
        if (scroll >= offset) {
            $('#about-b').addClass('active');
            $('aside li a').not('#about-b').removeClass('active');
        }
    });
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.works').offset().top;
        if (scroll >= offset) {
            $('#works-b').addClass('active');
            $('aside li a').not('#works-b').removeClass('active');
        }
    });
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.experience').offset().top;
        if (scroll >= offset) {
            $('#experience-b').addClass('active');
            $('aside li a').not('#experience-b').removeClass('active');
        }
    });
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.skills').offset().top;
        if (scroll >= offset) {
            $('#skills-b').addClass('active');
            $('aside li a').not('#skills-b').removeClass('active');
            $('.scroll-bar').scrollTop(300);
        }
    });
    
    $(window).scroll(function () {
        var scroll = $(this).scrollTop(),
            offset = $('.contact').offset().top;
        if (scroll >= offset - 300) {
            $('#contact-b').addClass('active');
            $('aside li a').not('#contact-b').removeClass('active');
        }
    });
    
    
});