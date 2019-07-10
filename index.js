
var randNum = Math.round( Math.random() * 9 ) + 1;


makeGuess = (form) => {
    let guessedNum = parseInt(form.inputbox.value, 10);
    form.inputbox.value = "";
    let response = 'You guessed: ' + guessedNum ;
    if(guessedNum === randDum){
        text += '<br> Your Answer was correct!';
    }
    else {
        text += '<br> You are Wrong!';
    }
    document.getElementById("response").innerText = text;
}
function sendData(form) {
         var guessNum = form.inputbox.value;
    }
    