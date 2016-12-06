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
        keys: ['history'],
        rating: 0
    }
];

$(document).ready(function(){
    renderGallery(gMemes);
});

function renderGallery(memes) {
    memes.forEach(function(memObj) {
        var hex = '<div id="'+memObj.id+'" class="hexagon"'+
                ' style="background-image: url('+memObj.url+')">'+
                    '<div class="hexTop"></div>'+
                    '<div class="hexBottom"></div>'+
                '</div>';
        var elGallery = $('.gallery').append(hex);
    });
}

function addNewMeme(imgUrl, keywords) {

}

function addUserMem() {
    console.log('addUserMem button');
}