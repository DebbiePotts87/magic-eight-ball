let randomNumber = Math.floor(Math.random() * 8);
let text;

const responses = [
  "you're having a laugh",
  "Don't be so silly",
  "HAHAHAHAHA silly goose!",
  "Are you sure you really want to know that?",
  "Not a chance I'm telling you that!",
  "Why are you even playing this game?",
  "You know, I'm getting bored now",
  "I'm sorry but telling you the answer would be a really bad idea"
];

if (randomNumber >= 0 && randomNumber < responses.length) {
  text = responses[randomNumber];
} else {
  text = "I don't know what happened here but I appear to be very broken";
}