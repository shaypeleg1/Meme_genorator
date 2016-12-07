'use strict';
// iniate all the memes keywords rating
function initKeywordRating(memes) {
    var keywordsRate = {};
    memes.forEach(function(mem) {
        mem.keywords.forEach(function(keyword) {
            keywordsRate[keyword] = Math.floor((Math.random() * 10) + 1);
        });
    });
    return keywordsRate;
}
// draw keyword cloud
function drawKeywordCloud(keywordsObj) {
    $( ".common-search" ).empty();
    Object.keys(keywordsObj).forEach(function(keyword) {
        var fontSize = Math.log(keywordsObj[keyword] * 5);
        var searchTag ='<div id="'+keyword+
                        '" style="font-size:'+fontSize+
                        'px">'+keyword+
                        '</div>';
        var elGallery = $('.common-search').append(searchTag);
    });
}