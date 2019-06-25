'use strict';

function projectsPage() {
    $('.portfolio-button').click(function(event) {
        event.preventDefault();
        $('.projects-banner').fadeIn();
        $('.landing-banner').fadeOut();
        $('.about-banner').fadeOut();
        $('.contact-banner').fadeOut();
        /*$('.projects-banner').addClass('show');
        $('.landing-banner').removeClass('show');
        $('.about-banner').removeClass('show');
        */
    })
}
function aboutPage() {
    $('.about-button').click(function(event) {
        event.preventDefault();
        $('.about-banner').fadeIn();
        $('.landing-banner').fadeOut();
        $('.projects-banner').fadeOut();
        $('.contact-banner').fadeOut();
    })
}
function contactPage() {
    $('.contact-button').click(function(event) {
        event.preventDefault();
        $('.contact-banner').fadeIn();
        $('.about-banner').fadeOut();
        $('.landing-banner').fadeOut();
        $('.projects-banner').fadeOut();
    })
}
function hamburger() {
    $('.hamburger').click(function(event){
        event.preventDefault();
        $('.hamburger-nav').toggleClass('show');
    }) 
}

function pageStart() {
    projectsPage();
    aboutPage();
    contactPage();
    hamburger();
}

pageStart();