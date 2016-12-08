'use strict'
console.log('text tool');

function drawTextOnCanvas(gTextObj) {

    var elImg = gCurrElImg;

    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height);

    gCtx.textAlign = gTextObj['topText'].align;
    gCtx.font = gTextObj['topText'].size+"px 'Segoe UI'";
    gCtx.fillText(gTextObj['topText'].text, elImg.width/2, elImg.height*0.2); 

    gCtx.textAlign = gTextObj['bottomText'].align;
    gCtx.font = gTextObj['bottomText'].size+"px 'Segoe UI'";
    gCtx.fillText(gTextObj['bottomText'].text, elImg.width/2, elImg.height*0.85); 

}

function buttonIntersec(direction, prop, value) {
    switch(prop) {
        case 'text':
            gState[direction].text = value;
            drawTextOnCanvas(gState);
        break;
        case 'plus':
            gState[direction].size++;
        break;
        case 'minus':
            gState[direction].size--;
        break;
        case 'align':
            gState[direction].align = value;
        break;
    }
}



$('.txtStylebtn').click(function () {
    console.log(this.name);
    var txtProp = this.name;
    var txtDirection = $(this).parents().children(':first-child');
    
    var direct = txtDirection[0].className;
    console.log(direct);
    buttonIntersec(direct,txtProp);
});

