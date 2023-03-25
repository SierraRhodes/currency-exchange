import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService.js';

CurrencyService.getCurrency()
  .then((data) => {
    const rates = data.conversion_rates;
    const dropdown = document.getElementBy("currency-dropdown");

    for(const currency in rates) {
      const option = document.createElement("option");
      option.value = currency;
      option.text = currency + "(" + rates[currency] + ")";
      dropdown.add(option);
    }


  });