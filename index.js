
var randNum = Math.round( Math.random() * 9 ) + 1;


makeGuess = (form) => {
    let guessedNum = parseInt(form.inputbox.value, 10);
    form.inputbox.value = "";
    if(guessedNum === randDum){
        text += '<br> Your Answer was correct!';
    }
    else {
        text += '<br> You are Wrong!';
    }
    if(guessedNum > randNum){
        text += 'Too high!';
    }
    if(guessedNum < randNum){
        text += 'Too low!';
    }
    document.getElementById("response").innerText = text;
}

    