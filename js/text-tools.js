'use strict'
function drawTextOnCanvas(textStr, className) {

    var elImg = gCurrElImg;
    var textStrTop;
    
    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height);
    gCtx.font = "60px 'Segoe UI'";
    if(className === 'textTop'){
        var elBottom = document.querySelector('.textBottom');
        var textStrBottom = elBottom.value;
        gCtx.fillText(textStr, 50, 100); 
        gCtx.fillText(textStrBottom, 50, 300);
    } else {
        var elTop = document.querySelector('.textTop');
        var textStrTop = elTop.value;
        gCtx.fillText(textStrTop, 50, 100); 
        gCtx.fillText(textStr, 50, 300);
    }
}


$('.txtStylebtn').click(function() {
    console.log(this.name);
    
  var x = $(this).parents().children(':first-child');
  console.log(x[0].className);
  
  
});
function changeTextStyle(direction,prop,value) {

}