'use strict';

function getDogImages(inputValue) {
    let requiredUrl = `https://dog.ceo/api/breeds/image/random/${inputValue}`; 
    
    fetch(requiredUrl)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
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