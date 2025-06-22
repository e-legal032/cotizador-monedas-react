export async function getExchangeRate(currencyCode) {
  if (currencyCode === "USD") {
    // Usamos DolarAPI para el dólar oficial argentino
    const response = await fetch("https://dolarapi.com/v1/dolares/oficial");

    if (!response.ok) {
      throw new Error("No se pudo obtener el dólar oficial.");
    }

    const data = await response.json();
    return data.venta; // Valor de venta oficial
  } else {
    // Usamos ExchangeRate-API para otras monedas
    const response = await fetch(`https://open.er-api.com/v6/latest/${currencyCode}`);

    if (!response.ok) {
      throw new Error("No se pudo obtener la cotización internacional.");
    }

    const data = await response.json();
    return data.rates.ARS;
  }
}
