let randomNumber = Math.floor(Math.random() * 8);
let text;

const responses = [
  "Get me some kibble and I'll tell you",
  "MEOW MEOW!",
  "No, have a nap instead",
  "Are you sure you really want to know that?",
  "Opening a can of tuna and you'll find the answer",
  "HUSH now, I'm playing",
  "I'll tell you when I'm done sleeping",
  "The blanket holds the answers"
];

if (randomNumber >= 0 && randomNumber < responses.length) {
  text = responses[randomNumber];
} else {
  text = "I don't know what happened here but I appear to be very broken";
}