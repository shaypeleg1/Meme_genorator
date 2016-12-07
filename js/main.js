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

    // $(".hexagon").click(function(node){
    //     var strUrl = node.currentTarget.style.backgroundImage;
    //     // TODO find better 
    //     console.log(node);
    //     strUrl = strUrl.substr(5,strUrl.length-7);
    //     drawImgOnCanvas(strUrl);
    // });

});


function initCanvas() {
    var canvas;
    canvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
}

// clean and print new memes gallery
function renderGallery(memes) {
    $( ".gallery" ).empty();
    memes.forEach(function(mem) {
        renderHex(mem);
    });
}
// print meme to hexagon
function renderHex(memObj) {
    var hex = '<li><div>'+
                '<img id="'+ memObj.id +
                '" onclick="drawImgOnCanvas(this)'+
                '" src="'+memObj.url+
                '" alt="'+memObj.keywords+'"'+
                ' /> </div></li>';
    var elGallery = $('.gallery').append(hex);
}
// add new meme obj to the global
function addNewMeme(imgUrl, keywords) {
    var nextId = gMemes.length + 1;
    var imgObj = {
                id: nextId,
                url: imgUrl,
                keywords: keywords,
                rating: 0
                };
    console.log(imgObj);
    gMemes.push(imgObj);
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
    } else if (string === "") {
        renderGallery(gMemes);
    }
}

function addUserMem() {


    var userUrl = prompt('insert img url');
    var userKeywordsStr = prompt('insert keywords');
    var userKeywords = userKeywordsStr.split(',');
    addNewMeme(userUrl,userKeywords);
    renderHex(gMemes[gMemes.length-1]);
}


function drawImgOnCanvas(element) {
    var currMeme = gMemes.find(function(meme) {
        return meme.id === parseInt(element.id);
    });
    
    var img = new Image();
    img.src = currMeme.url;

    console.log('',img);
    
    
    var imgx = img.width;
    var imgy = img.height;

    

    var elCanvas = document.querySelector('#canvas');
    elCanvas.width = imgx;
    elCanvas.height = imgy;

    gCtx.drawImage(img, 0, 0, imgx, imgy);


}