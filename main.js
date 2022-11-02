let numberContainer = document.querySelector(".rating-state__number-container");
let buttonSubmit = document.querySelector(".rating-state__send");
let ratingNumber = document.querySelector(".thankYou-state__result--number");
let ratingState = document.querySelector(".rating-state");
let thankyouState = document.querySelector(".thankYou-state");

numberContainer.addEventListener("click", (event) => {
  let numberSelected = event.target.innerText;
  ratingNumber.innerText = numberSelected;

  if (numberSelected > 0 || numberSelected <= 5) {
    buttonSubmit.addEventListener("click", () => {
      ratingState.style.display = "none";
      thankyouState.style.display = "flex";
    });
  }
});
