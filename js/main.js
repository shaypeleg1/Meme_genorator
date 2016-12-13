'use strict';
// ------  Globals ------- //

var gKeywordsRating = {};
var gState = {

    canvas: null,
    ctx: null,
    currElImg: null,

    topText: {
        text: '',
        align: 'center',
        size: 60,
        color: '#fff',
        font: 'Segoe UI',
        shadow: false
    },

    bottomText: {
        text: '',
        align: 'center',
        size: 60,
        color: '#fff',
        font: 'Segoe UI',
        shadow: false
    }
    
}

// onload, render the memes gallary and the keyword cloud
$(document).ready(function () {
    renderGallery(gMemes);
    gKeywordsRating = initKeywordRating(gMemes);
    drawKeywordCloud(gKeywordsRating);
    initCanvas();
});

$(document).ready(function() {
    $(".loading-container" ).css({"display": "none"});
    $(".inner-container" ).css({"display": "block"});
});

// clean and print new memes gallery
function renderGallery(memes) {
    $(".gallery").empty();
    memes.forEach(function (mem) {
        renderHex(mem);
    });
}
// print meme to hexagon
function renderHex(memObj) {
    var hex = '<li>' +
                '<div>' +
                    '<img id="' + memObj.id +'" onclick="memClick(this)' + '" src="' + memObj.url +'" alt="' + memObj.keywords +  '" />'+
                '</div>' +
               '</li>';

    var elGallery = $('.gallery').append(hex);
}

function initCanvas() {
    gState.canvas = document.querySelector('#canvas');
    gState.ctx = gState.canvas.getContext('2d');
}

// get string from user and serch if which objects key words
// match then render only the matching objects if found any.
function searchForKeyword(string) {
    var matchedMemes = [];
    gMemes.forEach(function (meme) {
        meme.keywords.forEach(function (key) {
            if (key === string) {
                gKeywordsRating[key]++;
                matchedMemes.push(meme);
            }
        });
    });
    if (matchedMemes.length !== 0) {
        renderGallery(matchedMemes);
    } else {
        renderGallery(gMemes);
    }
}

// sort and print hexgons by rating prop
function sortByPopular() {
    var popularMemes = gMemes.sort(function (a, b) {
        return b.rating - a.rating;
    });
    renderGallery(popularMemes);
}

// user can add customized mem
function addUserMem() {
    var userUrl = prompt('insert img url');
    var userKeywordsStr = prompt('insert keywords');
    var userKeywords = userKeywordsStr.split(',');
    addNewMeme(userUrl, userKeywords);
    renderHex(gMemes[gMemes.length - 1]);
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
    keywords.forEach(function (keyword) {
        gKeywordsRating[keyword] = 0;
    });
}

// find the selected mem inside the global.
function memClick(elMem) {
    var currMeme = gMemes.find(function (meme) {
        return meme.id === parseInt(elMem.id);
    });
    drawImgOnCanvas(currMeme.url);
    var elMemeGen = document.querySelector('.memeGen');
    elMemeGen.style.display = "block";
    window.scrollTo(0, document.querySelector(".memeGen").offsetTop);
    currMeme.rating++;
}

function drawImgOnCanvas(imgUrlStr) {
    var elImg = new Image();
    elImg.src = imgUrlStr;
    gState.currElImg = elImg;

    console.log('', elImg);

    var imgx = elImg.width;
    var imgy = elImg.height;

    var elCanvas = document.querySelector('#canvas');
    elCanvas.width = imgx;
    elCanvas.height = imgy;

    gState.ctx.drawImage(elImg, 0, 0, imgx, imgy);
}

