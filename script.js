$(function () {

    $('i').css('color', 'black');
    // $('i').css('font-size', '25px');

    $('.hon').hover(
        function () {
            $(this).addClass('faa-shake');
            $(this).addClass('animated');
            $(this).css('color', 'blue');
        },
        function () {
            $(this).removeClass('faa-shake');
            $(this).removeClass('animated');
            $(this).css('color', 'black');
        }
    );


});
