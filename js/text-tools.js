'use strict'
console.log('text tool');

function drawTextOnCanvas(gTextObj) {

    var elImg = gCurrElImg;

    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height);

    if(gTextObj['topText'].shadow) {
        ctx.shadowColor = "black";
        ctx.shadowOffsetX = 3; 
        ctx.shadowOffsetY = 3; 
        ctx.shadowBlur = 3;
    }
    gCtx.textAlign = gTextObj['topText'].align;
    gCtx.font = gTextObj['topText'].size+'px '+gTextObj['bottomText'].font;
    gCtx.fillText(gTextObj['topText'].text, elImg.width/2, elImg.height*0.2); 

    if(gTextObj['bottomText'].shadow) {
        ctx.shadowColor = "black";
        ctx.shadowOffsetX = 3; 
        ctx.shadowOffsetY = 3; 
        ctx.shadowBlur = 3;
    }
    gCtx.textAlign = gTextObj['bottomText'].align;
    gCtx.font = gTextObj['bottomText'].size+'px '+gTextObj['bottomText'].font;
    gCtx.fillText(gTextObj['bottomText'].text, elImg.width/2, elImg.height*0.85); 

}

function buttonIntersec(direction, prop, value) {
    switch(prop) {
        case 'text':
            gState[direction].text = value;
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



$('.txtStylebtn').click(function() {
    console.log(this.name);
  var x = $(this).parents().children(':first-child');
  console.log(x[0].className);
});

