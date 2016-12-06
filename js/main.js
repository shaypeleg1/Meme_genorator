'use strict';
console.log('Hello Meme');
var gCtx;
var gMemes = [
    {
        id: 0,
        url: 'img/memes/meme_1.jpg',
        keywords: ['animal', 'history', 'skeptic'],
        rating: 0
    },
    {
        id: 1,
        url: 'img/memes/meme_2.jpg',
        keywords: ['history'],
        rating: 0
    }
];

$(document).ready(function(){
    renderGallery(gMemes);
    initCanvas();

    $(".hexagon").click(function(node){
        var strUrl = node.currentTarget.style.backgroundImage;
        strUrl = strUrl.substr(5,strUrl.length-7);
        console.log(node);
        
        drawImgOnCanvas(strUrl);
    });

});

function initCanvas() {
    var canvas;
    canvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
}

function renderGallery(memes) {
    memes.forEach(function(memObj) {
        var hex = '<div id="'+memObj.id+'" class="hexagon"'+
                ' style="background-image: url('+memObj.url+')">' +
                    '<div class="hexTop"></div>'+
                    '<div class="hexBottom"></div>'+
                '</div>';
        var elGallery = $('.gallery').append(hex);
    });
}

function addNewMeme(imgUrl, keywords) {

}
// get string from user and serch if which objects key words
// match then render only the matching objects if found any:
function searchForKeyword(string) {
    var matchedMemes = [];
    gMemes.forEach(function(meme) {
        meme.keywords.forEach(function(key) {
            
            if(key === string) {
                matchedMemes.push(meme);  
            }
        });
    });
    if(matchedMemes.length !== 0) {
        renderGallery(matchedMemes);
    }
}

function addUserMem() {
    console.log('addUserMem button');
}

function drawImgOnCanvas(imgUrl) {
    console.log('img pressed!' , imgUrl);
    var img = new Image();
    img.src = imgUrl;

    gCtx.drawImage(img, 0, 0, 400, 300);
    gCtx.font = "60px 'Segoe UI'";
    gCtx.fillText("print on Canvas", 50, 300);

}
