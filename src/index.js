import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService.js';

CurrencyService.getCurrency()
  .then((data) => {
    if(data.result === "error") {
      const errorElement = document.getElementById("error");
      errorElement.innerHTML = data["error-type"] + ": " + data["error-info"];
      return;
    }
    const rates = data.conversion_rates;
    const dropdown = document.getElementById("currency-dropdown");

    for(const currency in rates) {
      const option = document.createElement("option");
      option.value = currency;
      option.text = currency + "(" + rates[currency] + ")";
      dropdown.add(option);
    }

    const form = document.getElementById("currency-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      convertCurrency();
    });

    function convertCurrency() {
      const selectedCurrency = dropdown.value;
      const currencyAmount = document.getElementById("currencyAmount").value;

      const convertedAmount = currencyAmount * rates[selectedCurrency];
      const convertedAmountElement = document.getElementById("convertedAmount");

      convertedAmountElement.innerHTML = convertedAmount.toFixed(2) + " " + selectedCurrency;
    }
  });
