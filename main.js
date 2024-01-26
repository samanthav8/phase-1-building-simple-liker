// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Get a refernce to the error modal element + add 'hidden' class
const errorModal = document.getElementById('modal')
const errorMessage = document.getElementById('modal-message')
errorModal.classList.add("hidden");

//Grab the emptyHeart and iterate through each
const emptyHeart = document.querySelectorAll('.like-glyph')
emptyHeart.forEach((element) => {
  element.addEventListener('click', function() {
    //Stimulate making a server request 
    mimicServerCall()
      .then(response => {
        console.log(response);

        //Handle the successful response here
        //Check if the heart has the .activated-heart class
    if (element.classList.contains('activated-heart')) {
      //Remove the .activated-heart class
      element.classList.remove('activated-heart');
      //Change the heart back to empty
      element.textContent = EMPTY_HEART
    }
    else {
      element.classList.add('activated-heart');
        element.textContent = FULL_HEART
    }
      })
      .catch(error => {
        console.error(error);
        //Handle error
        errorMessage.textContent = 'Server request failed! Please try again.';
        errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
      });
      });

  })



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


