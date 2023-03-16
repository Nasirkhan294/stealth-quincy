let fans = document.querySelector(".fans");
let fish = document.querySelector(".fish");
let pets = document.querySelector(".pets");

let input = document.querySelector('#toggle');
let ball = document.querySelector('.ball');
let header = document.querySelector('h1')
let body = document.querySelector('body')


fans.addEventListener("mouseover", function () {
  fans.innerText = "123k";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47k";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20k";
});

input.addEventListener('click', function() {
  if(body.classList.contains('light')) {
    body.classList.remove('light')
    ball.classList.add('move-right')
    header.innerText = "Stealth Quincy"
  } else {
    body.classList.add('light')
    ball.classList.remove('move-right')
    header.innerText = "Party Quincy"
  }
})
