'use strict';

function getDogImages(inputValue) {
    let requiredUrl = `https://dog.ceo/api/breeds/image/random/${inputValue}`; 
    
    fetch(requiredUrl)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson));
}

function displayImages(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`)
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let inputValue = $('#numDogs').val();
        getDogImages(inputValue);
    });
}

$(function() {
    console.log('App loaded.  Waiting for submit.')
    watchForm();
});
