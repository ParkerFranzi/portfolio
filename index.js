'use strict';
function homePage() {
    $('.home-button').click(function(event) {
        event.preventDefault();
        $('.landing-banner').fadeIn();
        $('.projects-banner').fadeOut();
        $('.about-banner').fadeOut();
        $('.contact-banner').fadeOut();
        $('.hamburger-nav').removeClass('show');
    })
}
function projectsPage() {
    $('.portfolio-button').click(function(event) {
        event.preventDefault();
        $('.projects-banner').fadeIn();
        $('.landing-banner').fadeOut();
        $('.about-banner').fadeOut();
        $('.contact-banner').fadeOut();
        $('.hamburger-nav').removeClass('show');
    })
}
function aboutPage() {
    $('.about-button').click(function(event) {
        event.preventDefault();
        $('.about-banner').fadeIn();
        $('.landing-banner').fadeOut();
        $('.projects-banner').fadeOut();
        $('.contact-banner').fadeOut();
        $('.hamburger-nav').removeClass('show');
    })
}
function contactPage() {
    $('.contact-button').click(function(event) {
        event.preventDefault();
        $('.contact-banner').fadeIn();
        $('.about-banner').fadeOut();
        $('.landing-banner').fadeOut();
        $('.projects-banner').fadeOut();
        $('.hamburger-nav').removeClass('show');
    })
}
function hamburger() {
    $('.hamburger').click(function(event){
        event.preventDefault();
        $('.hamburger-nav').toggleClass('show');
    }) 
}

function pageStart() {
    homePage();
    projectsPage();
    aboutPage();
    contactPage();
    hamburger();
}

pageStart();