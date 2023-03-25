export default class CurrencyService {
  static async getCurrency() {
    try {
      const response = await fetch(`${process.env.API_KEY}`)
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
  }