
const name = "Sana Ji";
document.getElementById("name").innerText =name;

const quotes = [
  "You Know Sana You Are a Star From My Galaxy ❤️",
  "Keep Shine Like a Dimond oky✨",
  " Tum ak Adhura khwab Ban ke reh gai hu 💖",
  " Talking to you is like finding clarity in chaos 💫",
  "You're not just someone I admire;You're someone I deeply respect Madem Ji! &#129735"
];

let speed=[5.6,6.8,6,7,7.6,6,5,6.6,8,5]
let rain='';
let number=5;
for(let i=0; i<10; i++){


 let randomSec=Math.random();
let duration=speed[i]

let delay=(Math.floor(randomSec*1)+1)+(Math.floor(randomSec*5));

console.log(duration)
rain+=`

  <div class="raindrop"  style="
   left:${number}%;
            animation-duration:${duration}s;
            animation-delay: 0.${delay};
  ">&#128151</div>`
  number+=10;

}

document.querySelector('.rain-container').innerHTML=rain;


function showSurprise() {
  const surpriseDiv = document.getElementById('surprise');
  surpriseDiv.style.display = 'block';


  document.querySelector('.rain-container').classList.add('displayRain')

}

function showQuote() {
  const quoteBox = document.getElementById('quote-box');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.innerHTML = randomQuote;
  quoteBox.style.display = 'block';
}
