

let eightBallButton = document.getElementById("eight-ball-submit");
eightBallButton.addEventListener('click', eightBall);

function eightBall() {

    let randomNumber = Math.floor(Math.random() * 8);
    let text;
        
    switch (randomNumber) {
    case 1:
    text = 'It is certain';
    break;
    case 2:
    text = 'It is decidedly so';
    break;
    case 3:
    text = 'Reply hazy try again';
    break;
    case 4:
    text = 'Cannot predict now';
    break;
    case 5:
    text = 'Do not count on it';
    break;
    case 6:
    text = 'My sources say no';
    break;
    case 7:
    text = 'Outlook not so good';
    break;
    case 8:
    text = 'Signs point to yes';
    break;
    case 0:
    text = 'Wiggle me some more';
    break;
    default:
    text = 'OOPS please try again'; 
   }
   document.getElementById('eight-ball-answer').innerHTML = text
}