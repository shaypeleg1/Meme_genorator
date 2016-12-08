'use strict'
console.log('text tool');

function drawTextOnCanvas(gTextObj) {

    var elImg = gCurrElImg;

    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height);
    gCtx.font = "60px 'Segoe UI'";

        gCtx.textAlign = gTextObj['topText'].align;
        gCtx.fillText(gTextObj['topText'].text, elImg.width/2, elImg.height*0.2); 

        gCtx.textAlign = gTextObj['bottomText'].align;
        gCtx.fillText(gTextObj['bottomText'].text, elImg.width/2, elImg.height*0.85); 

}

function buttonIntersec(prop, value, direction) {
    switch(prop) {
        case 'text':
            gState[direction].text = value;
            drawTextOnCanvas(gState);
        break;
    }
}



$('.txtStylebtn').click(function() {
    console.log(this.name);
  var x = $(this).parents().children(':first-child');
  console.log(x[0].className);
  
  
});
function changeTextStyle(direction,prop,value) {

}
