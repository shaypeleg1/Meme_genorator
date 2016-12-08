'use strict'
console.log('text tool');

// listen to click on text butoons and get the direction and property 
$('.txtStylebtn').click(function () {
    var txtProp = this.name;
    var txtEl = $(this).parents().children(':first-child');
    var txtDirection = txtEl[0].className;
    buttonIntersec(txtDirection,txtProp);
});

// updates the gState props and sends to drawTextOnCanvas
function buttonIntersec(direction, prop, value) {
    switch(prop) {
        case 'text':
            gState[direction].text = value;
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
        case 'shadow':
            // gState[direction].shadow = true; 
        break;
    }
    drawTextOnCanvas(gState);
}

// renders the canvas with the current img and text
function drawTextOnCanvas(gTextObj) {
    var elImg = gCurrElImg;
    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height);
    // add shadow
    if(gTextObj['topText'].shadow) {
        ctx.shadowColor = "black";
        ctx.shadowOffsetX = 3; 
        ctx.shadowOffsetY = 3; 
        ctx.shadowBlur = 3;
    }
    // set text styles
    gCtx.fillStyle = gTextObj['topText'].color;
    gCtx.textAlign = gTextObj['topText'].align;
    gCtx.font = gTextObj['topText'].size+'px '+gTextObj['bottomText'].font;
    // draw top text on canvas 
    gCtx.fillText(gTextObj['topText'].text, elImg.width/2, elImg.height*0.2); 

    gCtx.fillStyle = gTextObj['bottomText'].color;
    gCtx.textAlign = gTextObj['bottomText'].align;
    gCtx.font = gTextObj['bottomText'].size+'px '+gTextObj['bottomText'].font;
    // draw bottom text on canvas 
    gCtx.fillText(gTextObj['bottomText'].text, elImg.width/2, elImg.height*0.85); 
}






