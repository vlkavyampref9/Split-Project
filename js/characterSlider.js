//----------JQuery-----------------//

$(function () {
    flag = 0;
    $('.next').on("click", function () {
        if (flag == 0) {
            $('.c5').css({ 'visibility': 'hidden' });
            $('.c1').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.c2').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c3').css({ 'visibility': 'visible', 'opacity':'0.6', 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Drama Queen');
            flag = 1;
        } else if (flag == 1) {
            $('.c1').css({ 'visibility': 'hidden' });
            $('.c2').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c3').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c4').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Control Freak');
            flag = 2;
        } else if (flag == 2) {
            $('.c2').css({ 'visibility': 'hidden' });
            $('.c3').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c4').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c5').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Chill Pill');
            flag = 3;
        } else if (flag == 3) {
            $('.c3').css({ 'visibility': 'hidden' });
            $('.c4').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.c5').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c1').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('The Saint');
            flag = 4;
        } else if (flag == 4) {
            $('.c4').css({ 'visibility': 'hidden' });
            $('.c5').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c1').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c2').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Cry Baby');
            flag = 0;
        } /*else if (flag == 5) {
            $('.c5').css({ 'visibility': 'hidden' });
            $('.c6').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.c7').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c8').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.charName').html('Nagging Gran');
            flag = 6;
        } else if (flag == 6) {
            $('.c6').css({ 'visibility': 'hidden' });
            $('.c7').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c8').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c9').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Jumpy Dad');
            flag = 7;
        } else if (flag == 7) {
            $('.c7').css({ 'visibility': 'hidden' });
            $('.c8').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c9').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c10').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.charName').html('Vile Uncle');
            flag = 8;
        } else if (flag == 8) {
            $('.c8').css({ 'visibility': 'hidden' });
            $('.c9').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c10').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c11').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Saint');
            flag = 9;
        } else if (flag == 9) {
            $('.c9').css({ 'visibility': 'hidden' });
            $('.c10').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.c11').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c12').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Control Devil');
            flag = 10;
        } else if (flag == 10) {
            $('.c10').css({ 'visibility': 'hidden' });
            $('.c11').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.c12').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c1').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.charName').html('Little Boy');
            flag = 11;
        } else if (flag == 11) {
            $('.c11').css({ 'visibility': 'hidden' });
            $('.c12').css({ 'transform': 'translateX(-90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.c1').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c2').css({ 'visibility': 'visible', 'transform': 'translateX(90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.charName').html('Bossy Boss');
            flag = 0;
        }*/
    });
    $('.prev').click(function () {
        if (flag == 0) {
            $('.c2').css({ 'visibility': 'hidden' });
            $('.c4').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c5').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c1').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.charName').html('The Saint');
            flag = 4;
        } /*else if (flag == 11) {
            $('.c1').css({ 'visibility': 'hidden' });
            $('.c10').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c11').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c12').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Control Devil');
            flag = 10;
        } else if (flag == 10) {
            $('.c12').css({ 'visibility': 'hidden' });
            $('.c9').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c10').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c11').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Saint');
            flag = 9;
        } else if (flag == 9) {
            $('.c11').css({ 'visibility': 'hidden' });
            $('.c8').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c9').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c10').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9','opacity':'0.6', 'top': '2vh' });
            $('.charName').html('Vile Uncle');
            flag = 8;
        } else if (flag == 8) {
            $('.c10').css({ 'visibility': 'hidden' });
            $('.c7').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.c8').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c9').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Jumpy Dad');
            flag = 7;
        } else if (flag == 7) {
            $('.c9').css({ 'visibility': 'hidden' });
            $('.c6').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c7').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c8').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Nagging Gran');
            flag = 6;
        } else if (flag == 6) {
            $('.c8').css({ 'visibility': 'hidden' });
            $('.c5').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c6').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c7').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Nosy Aunt');
            flag = 5;
        } else if (flag == 5) {
            $('.c7').css({ 'visibility': 'hidden' });
            $('.c4').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c5').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c6').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Angry Mom');
            flag = 4;
        }*/ else if (flag == 4) {
            $('.c1').css({ 'visibility': 'hidden' });
            $('.c3').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c4').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c5').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Chill Pill');
            flag = 3;
        } else if (flag == 3) {
            $('.c5').css({ 'visibility': 'hidden' });
            $('.c2').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c3').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c4').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Control Freak');
            flag = 2;
        } else if (flag == 2) {
            $('.c4').css({ 'visibility': 'hidden' });
            $('.c1').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)','opacity':'0.6', 'z-index': '9', 'top': '2vh' });
            $('.c2').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99', 'opacity':'1','top': '30vh' });
            $('.c3').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Drama Queen');
            flag = 1;
        } else if (flag == 1) {
            $('.c3').css({ 'visibility': 'hidden' });
            $('.c5').css({ 'visibility': 'visible', 'transform': 'translateX(-90px) scale(1)', 'opacity':'0.6','z-index': '9', 'top': '2vh' });
            $('.c1').css({ 'transform': 'translateX(0) scale(1.8)', 'z-index': '99','opacity':'1', 'top': '30vh' });
            $('.c2').css({ 'transform': 'translateX(90px) scale(1)', 'z-index': '9', 'opacity':'0.6','top': '2vh' });
            $('.charName').html('Cry Baby');
            flag = 0;
        }
    });
});

