$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-150px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
});

function flipCard() {
  var card = document.querySelector('.card');
  card.classList.toggle('flipped');

  var textElement = document.querySelector('.text');
  var newText = card.classList.contains('flipped') ? "Have a nice day</br>Slunce</br>Love you :) 🐞" : "Happy</br> Valentine's</br> Day!";
  textElement.innerHTML = newText;
}