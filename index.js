
function generateImageHtml(responseJson){
    return `${responseJson.message[0]}`

}

function getDogImages(){
    let userInput = $('#dogNum').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
    alert(responseJson.length)
}

function handleNumberSubmission() {
    $('form').on('click', '.js-submit', event => {
        event.preventDefault();
        console.log('pressed')
        getDogImages();
        alert(generateImageHtml());
    })
}

$(handleNumberSubmission);