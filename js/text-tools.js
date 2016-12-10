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
function buttonIntersec(direction, prop, elValue) {
    switch(prop) {
        case 'text':
            gState[direction].text = elValue;
        break;
        case 'plus':
            gState[direction].size++;
        break;
        case 'minus':
            gState[direction].size--;
        break;
        case 'align':
            gState[direction].align = elValue; 
        break;
        case 'shadow':
            gState[direction].shadow? gState[direction].shadow = false : gState[direction].shadow = true;  
        break;
        case 'trash':
            var elInput = document.querySelector('.' + direction);
            elInput.value = elValue;
            gState[direction].text = elValue;
    }
    drawTextOnCanvas(gState);
}

// renders the canvas with the current img and text
function drawTextOnCanvas(gTextObj) {
    var elImg = gCurrElImg;
    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height);
    // add shadow
    if(gTextObj['topText'].shadow) {
        gCtx.shadowColor = "black";
        gCtx.shadowOffsetX = 5; 
        gCtx.shadowOffsetY = 5; 
        gCtx.shadowBlur = 3;
    } else {
        gCtx.shadowOffsetX = 0; 
        gCtx.shadowOffsetY = 0;
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

function scrollToPosition(direction) {
    switch(direction){
        case 'main':
            window.scrollTo(0, document.querySelector(".mainPreview").offsetTop);
            var elMemeGen = document.querySelector('.memeGen');
            elMemeGen.style.display = "none";
            break;
    
        case 'about':
            window.scrollTo(0, document.querySelector(".about").offsetTop);
            break;

        case 'contact':
            window.scrollTo(0, document.querySelector(".form-title").offsetTop);
            break;
    }
}





