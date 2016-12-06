'use strict';
console.log('Hello Meme');

var gMemes = [
    {
        id: 2,
        url: 'img2.jpg',
        keywords: ['animal', 'history', 'skeptic'],
        rating: 0
    },
    {
        id: 3,
        url: 'img3.jpg',
        keywords: ['animal'],
        rating: 0
    }
];

function init() {
    renderGallery(gMemes);
}

function renderGallery(memes) {

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