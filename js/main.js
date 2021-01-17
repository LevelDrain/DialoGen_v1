function init() {
    var image1 = new Image();
    image1.src = 'img/zenitsu.jpg';
    var canvas1, txt1, ctx;

    image1.onload = (function () {
        canvas1 = document.querySelector('.preview1');
        ctx = canvas1.getContext('2d');
        canvas1.width = image1.width;
        canvas1.height = image1.height;
        ctx.drawImage(image1, 0, 0);
    });

    var btn1 = document.querySelector('.btn1');

    btn1.addEventListener('click', function () {
        txt1 = document.querySelector('.txt1');
        console.log(txt1.value);
        txt1.classList.add('.vtext');

        ctx.font = '20px serif';
        ctx.fillStyle = '#000';
        ctx.textBaseline = 'center';
        ctx.textAlign = 'center';

        //縦書き
        // var txtList = txt1.value.split('\n');
        // var lineHeight = ctx.measureText('あ').width;
        // txtList.forEach(function (elm, i) {
        //     Array.prototype.forEach.call(elm, function (ch, j) {
        //         ctx.fillText(ch, 150 - lineHeight * i, 50 + lineHeight * j);
        //     });
        // });


        var x = (canvas1.width / 2);
        var y = (canvas1.height / 2);
        ctx.fillText(txt1.value, x, y);
    });
}

document.addEventListener('DOMContentLoaded', init);