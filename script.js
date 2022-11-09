const procesy = ["glukoneogeneza", "glikogenoliza", "hiperurykemia"];
const btns = document.querySelectorAll(".ans");
const boxIndicators = document.querySelectorAll(".box.is-correct");
const boxQuestion = document.querySelector("#question");

//dwie funkcje zmieniają kolory
function changeColorGood() {
  boxIndicators.forEach(
    (indicator) => (indicator.style.backgroundColor = "green")
  );
}
function changeColorBad() {
  boxIndicators.forEach(
    (indicator) => (indicator.style.backgroundColor = "red")
  );
}

//przywołuje funkcje zmianiania kolorów, kiedy przyciski są kliknięte
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.textContent == "Good") {
      changeColorGood();
    } else changeColorBad();
  });
});

//pokazuje następne pytanie, kiedy się kliknie na questionBox
boxQuestion.addEventListener("click", () => {
  let zapytanie = document.getElementById("zapytanie");
  if (procesy[0] == "") {
    zapytanie.textContent = "skończyły się pytanka";
  }
  zapytanie.textContent = procesy[0];
  procesy.shift();
});
