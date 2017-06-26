$(document).ready(function () {
    //Show and Hide navigation section
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    
    //Adding Tooltip
    $('.skills-icon, .future-skills-icon').attr('data-toggle', 'tooltip').attr('data-placement', 'bottom');
    $('[data-toggle="tooltip"]').tooltip();
});