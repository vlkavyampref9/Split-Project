//----------JQuery-----------------//

$(function () {
    flag = 0;
    $('.next').on('click scroll', function () {
        if (flag == 0) {
            $('.c11').css({ 'visibility': 'hidden' });
            $('.c1').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c2').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c3').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Angry Boy');
            flag = 1;
        } else if (flag == 1) {
            $('.c1').css({ 'visibility': 'hidden' });
            $('.c2').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c3').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c4').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Angry Mom');
            flag = 2;
        } else if (flag == 2) {
            $('.c2').css({ 'visibility': 'hidden' });
            $('.c3').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c4').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c5').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Drama Queen');
            flag = 3;
        } else if (flag == 3) {
            $('.c3').css({ 'visibility': 'hidden' });
            $('.c4').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c5').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c6').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Haww Aunty');
            flag = 4;
        } else if (flag == 4) {
            $('.c4').css({ 'visibility': 'hidden' });
            $('.c5').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c6').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c7').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Jumpy Dad');
            flag = 5;
        } else if (flag == 5) {
            $('.c5').css({ 'visibility': 'hidden' });
            $('.c6').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c7').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c8').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Old Lady');
            flag = 6;
        } else if (flag == 6) {
            $('.c6').css({ 'visibility': 'hidden' });
            $('.c7').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c8').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c9').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Parents Worried');
            flag = 7;
        } else if (flag == 7) {
            $('.c7').css({ 'visibility': 'hidden' });
            $('.c8').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c9').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c10').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Scheming');
            flag = 8;
        } else if (flag == 8) {
            $('.c8').css({ 'visibility': 'hidden' });
            $('.c9').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c10').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c11').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Shakeup');
            flag = 9;
        } else if (flag == 9) {
            $('.c9').css({ 'visibility': 'hidden' });
            $('.c10').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c11').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c1').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Sponge Bob');
            flag = 10;
        } else if (flag == 10) {
            $('.c10').css({ 'visibility': 'hidden' });
            $('.c11').css({ 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c1').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c2').css({ 'visibility': 'visible', 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Angry Baby');
            flag = 0;
        }
    });
    $('.prev').click(function () {
        if (flag == 0) {
            $('.c2').css({ 'visibility': 'hidden' });
            $('.c10').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c11').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c1').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Sponge Bob');
            flag = 10;
        } else if (flag == 10) {
            $('.c1').css({ 'visibility': 'hidden' });
            $('.c9').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c10').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c11').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Shakeup');
            flag = 9;
        } else if (flag == 9) {
            $('.c11').css({ 'visibility': 'hidden' });
            $('.c8').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c9').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c10').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Scheming');
            flag = 8;
        } else if (flag == 8) {
            $('.c10').css({ 'visibility': 'hidden' });
            $('.c7').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c8').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c9').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Parents Worried');
            flag = 7;
        } else if (flag == 7) {
            $('.c9').css({ 'visibility': 'hidden' });
            $('.c6').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c7').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c8').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Old Lady');
            flag = 6;
        } else if (flag == 6) {
            $('.c8').css({ 'visibility': 'hidden' });
            $('.c5').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c6').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c7').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Jumpy Dad');
            flag = 5;
        } else if (flag == 5) {
            $('.c7').css({ 'visibility': 'hidden' });
            $('.c4').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c5').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c6').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Haww Aunty');
            flag = 4;
        } else if (flag == 4) {
            $('.c6').css({ 'visibility': 'hidden' });
            $('.c3').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c4').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c5').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Drama Queen');
            flag = 3;
        } else if (flag == 3) {
            $('.c5').css({ 'visibility': 'hidden' });
            $('.c2').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c3').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c4').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Angry Mom');
            flag = 2;
        } else if (flag == 2) {
            $('.c4').css({ 'visibility': 'hidden' });
            $('.c1').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c2').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c3').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Angry Boy');
            flag = 1;
        } else if (flag == 1) {
            $('.c3').css({ 'visibility': 'hidden' });
            $('.c11').css({ 'visibility': 'visible', 'transform': 'translateX(-100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.c1').css({ 'transform': 'translateX(0) scale(1.5)', 'z-index': '99', 'top': '30vh' });
            $('.c2').css({ 'transform': 'translateX(100px) scale(1)', 'z-index': '9', 'top': '0vh' });
            $('.charName').html('Angry Baby');
            flag = 0;
        }
    });
});

