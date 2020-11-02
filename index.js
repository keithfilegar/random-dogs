
function generateImageHtml(responseJson){
    const imageArray = responseJson.message;
    let imgHtml = '';
    let i = 0;

    imageArray.forEach(message => {
        imgHtml += `
        <div>
            <img src="${message}" alt="random dog image">
        </div>`;
        i++
    });

    return imgHtml;
}

function getDogImages(userInput){
        fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(responseJson => $('.js-image-holder').html(generateImageHtml(responseJson)))
        .catch(error => alert('Something went wrong. Try again later.'))
}

function handleNumberSubmission() {
    $('form').on('click', '.js-submit', event => {
        event.preventDefault();
        let userInput = $('#dogNum').val();
        if(userInput >= 1 && userInput <= 50) {
            getDogImages(userInput);
        }
        else {
            alert("Please select a number between 1 and 50")
        }
    })
}

$(handleNumberSubmission);