$(document).ready(function () {
    'use strict';
    
    //Defane function animation for navigation links
    function scrollTopAnimation(top) {
        $('body').animate({
            scrollTop: top
        }, 500);
    }
    
    //Show and Hide navigation section
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    
    //Adding Tooltip
    $('.skills-icon, .future-skills-icon').attr('data-toggle', 'tooltip').attr('data-placement', 'bottom');
    $('[data-toggle="tooltip"]').tooltip();
    
    //By click on nav links moving to the right clickec section with amination and close active menu
    $('.nav-links').click(function (e) {
        e.preventDefault();
        
        var getLink = $(this).attr('href'),
            gotTop = $(getLink).offset().top;
        
        scrollTopAnimation(gotTop);
        $('#overlay').removeClass('open');
        $('#toggle').removeClass('active');
    });
});