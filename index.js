'use strict';

function getDogImages(inputValue) {
    let requiredUrl = `https://dog.ceo/api/breeds/image/random/${inputValue}`; 
    
    fetch(requiredUrl)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        
}

function displayImages(responseJson) {
    console.log(responseJson);
    
    for (let i = 0; i < responseJson.message.length; i++) {
        var image = new Image();
        image.src = responseJson.message[i];
        $('#container').append(image);
    }
    
    $('.results').removeClass('hidden');

}

function watchForm() {
    $('form').submit(event => {
        $('#container').html('');
        event.preventDefault();
        let inputValue = $('#numDogs').val();
        getDogImages(inputValue);
    });
}

$(function() {
    console.log('App loaded.  Waiting for submit.')
    watchForm();
});
