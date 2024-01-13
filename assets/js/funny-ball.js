let eightBallButton = document.getElementById("funny-ball-submit");
eightBallButton.addEventListener('click', funnyBall);

function funnyBall() {

    let randomNumber = Math.floor(Math.random() * 8) + 1;
    let text;

    if (randomNumber === 1) {
        text = 'you\'re having a laugh';
    }
        else if (randomNumber === 2) {
            text = 'Don\'t be so silly';
        }
            else if (randomNumber === 3) {
                text = 'HAHAHAHAHA silly goose!';
            }
                else if (randomNumber === 4) {
                    text = 'Are you sure you really want to know that?';
                }
                    else if (randomNumber === 5) {
                        text = 'Not a chance I\'m telling you that!';
                    }
                        else if (randomNumber === 6) {
                            text = 'Why are you even playing this game?';
                        }
                            else if (randomNumber === 7) {
                                text = 'You know, I\'m getting bored now';
                            }
                                else if (randomNumber === 8) {
                                    text = 'I\'m sorry but tell you the answer would be a really bad idea';
                                }
                                    else {
                                        text = 'I don\'t know what happened here but I appear to be very boroken'
                                    }
    
    document.getElementById('funny-ball-answer').innerHTML = text
                                
}