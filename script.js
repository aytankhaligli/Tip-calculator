const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");

const options = document.querySelectorAll(".option");
const custom = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const amountMoney = document.querySelector(".amount-money");
const totalMoney = document.querySelector(".total-money");

billInput.addEventListener("input", function () {
  options.forEach((option, i) => {
    option.addEventListener("click", function () {
      if (i === 0)
        amountMoney.textContent = "$" + (billInput.value * 0.05).toFixed(2);
      if (i === 1)
        amountMoney.textContent = "$" + (billInput.value * 0.1).toFixed(2);
      if (i === 2)
        amountMoney.textContent = "$" + (billInput.value * 0.15).toFixed(2);
      if (i === 3)
        amountMoney.textContent = "$" + (billInput.value * 0.25).toFixed(2);
      if (i === 4)
        amountMoney.textContent = "$" + (billInput.value * 0.5).toFixed(2);
    });
  });
});

custom.addEventListener("input", function () {
  amountMoney.textContent =
    "$" + ((billInput.value * custom.value) / 100).toFixed(2);
});

peopleInput.addEventListener("input", function () {
  if (peopleInput.value == 0) {
    document.querySelector(".error-message").textContent = "Cant'be zero";
    peopleInput.style.setProperty("--Strong-cyan", "orangered");
  }
  if (peopleInput.value != 0 || peopleInput.value == "") {
    document.querySelector(".error-message").textContent = "";
    peopleInput.style.setProperty("--Strong-cyan", "rgb(38, 192, 171)");
  }
  totalMoney.textContent =
    "$" + (+amountMoney.textContent.slice(1) * peopleInput.value).toFixed(2);
});

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";
  custom.value = "";
  amountMoney.textContent = "$0.00";
  totalMoney.textContent = "$0.00";
});
