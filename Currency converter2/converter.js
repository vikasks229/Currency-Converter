const apiKey = '28c8bae351d85a95528b4f4e'; // Replace with your API key

async function getExchangeRate(fromCurrency, toCurrency) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
    const data = await response.json();
    return data.conversion_rates[toCurrency];
}

const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD'];
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');

currencies.forEach(currency => {
    fromCurrencySelect.innerHTML += `<option value="${currency}">${currency}</option>`;
    toCurrencySelect.innerHTML += `<option value="${currency}">${currency}</option>`;
});

document.getElementById('convert').addEventListener('click', async () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    const result = amount * rate;
    document.getElementById('result').innerText = `${amount} ${fromCurrency} is ${result.toFixed(2)} ${toCurrency}`;
});

