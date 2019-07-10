
let randomNum = Math.floor(Math.random() * 99);

makeGuess = (form) => {
    let guessedNum = parseInt(form.inputbox.value, 10);
    form.inputbox.value = "";
    let text = 'You guessed: ' + guessedNum ;
    if(guessedNum === randomN){
        text += '<br> Your Answer was correct!';
    }
    else {
        text += '<br> You are Wrong!';
    }
    document.getElementById("response").innerHTML = text;
}
function sendData(form) {
         var guessNum = form.inputbox.value;
    }