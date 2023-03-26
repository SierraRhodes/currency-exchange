import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService.js';

CurrencyService.getCurrency()
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch currency data.");
    }

    return response.json();
  })
  .then((data) => {
    if(data.result === "error") {
      const errorElement = document.getElementById("error");
      switch (data["error-type"]) {
        case "unsupported-code":
          errorElement.innerHTML = "Sorry, the currency code you selected is not supported by our service.";
          break;
        case "malformed-request":
          errorElement.innerHTML = "Sorry, the request to our server is malformed. Please try again.";
          break;
        case "invalid-key":
          errorElement.innerHTML = "Sorry, your API key is invalid. Please check that you have entered it correctly.";
          break;
        default:
          errorElement.innerHTML = "Sorry, an error occurred while fetching the currency data. Please try again later.";
          break;
      }

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
  })
  .catch((error) => {
    const errorElement = document.getElementById("error");
    errorElement.innerHTML = "An error occured while fetching the currency data: " + error.message;
  });
