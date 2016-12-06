'use strict';
console.log('Hello Meme');

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
});

// clean and print new memes gallery
function renderGallery(memes) {
    $( ".gallery" ).empty();
    memes.forEach(function(mem) {
        renderHex(mem);
    });
}
// print meme to hexagon
function renderHex(memObj) {
    var hex = '<div id="'+memObj.id+'" class="hexagon"'+
                ' style="background-image: url('+memObj.url+')">'+
                    '<div class="hexTop"></div>'+
                    '<div class="hexBottom"></div>'+
                '</div>';
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
    }
}

function addUserMem() {
    var userUrl = prompt('insert img url');
    var userKeywordsStr = prompt('insert keywords');
    var userKeywords = userKeywordsStr.split(',');
    addNewMeme(userUrl,userKeywords);
    renderHex(gMemes[gMemes.length-1]);
}