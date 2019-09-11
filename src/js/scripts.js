$(document).ready(function() {
  /* ===== sticky header ===== */

  jQuery(function() {
    jQuery(window).scroll(function() {
      var winTop = jQuery(window).scrollTop();
      if (winTop >= 30) {
        jQuery("body").addClass("sticky-header");
      } else {
        jQuery("body").removeClass("sticky-header");
      }
    });
  });

  /* ===== nav button ===== */

  $(".navbar-toggler").click(function() {
    $(this).toggleClass("open");
  });

  /* ===== ccaclulator sliider ===== */

  $(function() {
    $("#slider-price").slider({
      value: 1500,
      min: 500,
      max: 5000,
      step: 50,
      slide: function(event, ui) {
        $("#amount-price").val(ui.value);
        $("#js-choice-price").text(ui.value);
        getChoicePrice();
      }
    });
    $("#amount-price").val($("#slider-price").slider("value"));
  });

  $(function() {
    $("#slider-day").slider({
      value: 20,
      min: 3,
      max: 30,
      step: 1,
      slide: function(event, ui) {
        $("#amount-day").val(ui.value);
        $("#js-choice-day").text(ui.value);
        getChoiceDay();
      }
    });
    $("#amount-day").val($("#slider-day").slider("value"));
  });
});

/* ===== calcularor ===*/

const userInputPrice = document.querySelector("#js-choice-price").textContent;
const userInputDay = document.querySelector("#js-choice-day").textContent;
const resultCreditPrice = document.querySelector(".js-result-credit-price");
const resultCreditDay = document.querySelector(".js-result-credit-day");
const userPromocodeInput = document.querySelector(".js-promocode-input");
const userPromocodeBtn = document.querySelector(".js-promocode-submit");
const msgPromocodeTrue = document.querySelector(".js-isvalid-true");
const msgPromocodeFalse = document.querySelector(".js-isvalid-false");
const btnPromocodeModalClose = document.querySelector(
  ".js-promocode-modal-close"
);
const promotionalPrice = document.querySelector(".js-promotional-result-price");

let resultChoicePrice = 1500;
let resultChoiceDay = 20;
const creditRate = 1.75;
const creditRatePromocode = 1;
let isValidPromocode = false;

getDate(resultChoiceDay);
getPrice();

userPromocodeBtn.addEventListener("click", getPromocode);
btnPromocodeModalClose.addEventListener("click", cleansPromocodeModal);

function getChoicePrice() {
  const userInputPrice = document.querySelector("#js-choice-price").textContent;
  resultChoicePrice = userInputPrice;
  getPrice();
}

function getChoiceDay() {
  const userInputDay = document.querySelector("#js-choice-day").textContent;
  resultChoiceDay = userInputDay;
  getDate(resultChoiceDay);
}

function getPrice() {
  if (isValidPromocode) {
    const percent = creditRatePromocode * resultChoiceDay;
    const interestLoan = (resultChoicePrice / 100) * percent;
    const total = Number(resultChoicePrice) + interestLoan;
    promotionalPrice.textContent = Math.floor(total * 100) / 100;
    promotionalPrice.style.display = "inline";
    resultCreditPrice.classList.add("not-active-price");
  }

  const percent = creditRate * resultChoiceDay;
  const interestLoan = (resultChoicePrice / 100) * percent;
  const total = Number(resultChoicePrice) + interestLoan;
  resultCreditPrice.textContent = Math.floor(total * 100) / 100;
}

function getDate(resultChoiceDay) {
  getPrice();
  const dayMs = 86400000;
  let resultData = resultChoiceDay * dayMs;

  const time = Date.now();
  const validData = time + resultData;

  const date = new Date(validData);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  const setData = `${day}.${month}.${year}`;

  resultCreditDay.textContent = setData;
}

function getPromocode(e) {
  const resultPromocodeInput = userPromocodeInput.value;

  isValidPromocodeInput(resultPromocodeInput);
  if (isValidPromocode) {
    msgPromocodeTrue.style.display = "block";
    getPrice();
  } else {
    msgPromocodeFalse.style.display = "inline-block";
  }
}

function isValidPromocodeInput(promocode) {
  isValidPromocode = true;
  // isValidPromocode = false;
}

function cleansPromocodeModal() {
  msgPromocodeTrue.style.display = "none";
  msgPromocodeFalse.style.display = "none";
  userPromocodeInput.value = "";
}
