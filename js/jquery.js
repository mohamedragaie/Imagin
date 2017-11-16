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
});