$(document).ready(function () {
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    $('.skills-icon').attr('data-toggle', 'tooltip').attr('data-placement', 'bottom');
});