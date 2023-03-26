export default class CurrencyService {
  static async getCurrency() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const data = await response.json();


      if (data.result === "error") {
        const errorMessage = `An error occured while fetching the currency data: ${data["error-type"]}`;
        console.log(errorMessage);
        throw new Error(errorMessage);
      }

      return data;
    } catch(error) {
      throw new Error(error.message);
    }
  }
}