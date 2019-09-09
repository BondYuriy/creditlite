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
let resultChoicePrice = 1500;
let resultChoiceDay = 20;
const creditRate = 1.75;

getDate(resultChoiceDay);
getPrice();

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
  const percent = creditRate * resultChoiceDay;
  const interestLoan = (resultChoicePrice / 100) * percent;
  const total = Number(resultChoicePrice) + interestLoan;
  resultCreditPrice.textContent = Math.floor(total * 100) / 100;
}

function getDate(resultChoiceDay) {
  getPrice();
  var dayMs = 86400000;
  let resultData = resultChoiceDay * dayMs;

  var time = Date.now();
  var validData = time + resultData;

  var date = new Date(validData);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  var setData = `${day}.${month}.${year}`;

  resultCreditDay.textContent = setData;
}
