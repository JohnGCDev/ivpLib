$(document).ready(function(){
    $('.nav-alert-custom')
    .mouseover(function(){
        $(this).find('span').addClass('alert-primary');

    })
    .mouseout(function(){
        $(this).find('span').removeClass('alert-primary')
    });
});