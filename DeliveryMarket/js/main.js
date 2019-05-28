$(document).ready(function () {
    let flag = true;
    $('.markets-btn').click(function () {
        if (flag) {
            $('.card-dn').fadeIn();
            flag = false;
            $(this).text('Cвернуть');
        } else {
            $('.card-dn').fadeOut();
            flag = true;
            $(this).text('Показать больше');
        }
    });

    
});