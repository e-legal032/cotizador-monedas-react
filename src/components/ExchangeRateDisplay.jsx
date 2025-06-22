import { useEffect, useState } from "react";
import { getExchangeRate } from "../services/api";

function ExchangeRateDisplay({ currency }) {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getExchangeRate(currency)
      .then((valor) => {
        setRate(valor);
        setLoading(false);
      })
      .catch(() => {
        setError("Ocurrió un error al obtener los datos.");
        setLoading(false);
      });
  }, [currency]);

  if (loading) return <p>Cargando cotización...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h3>Cotización actual del {currency}:</h3>
      <p>💰 {new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
        }).format(rate)}</p>
      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
    El valor del dólar se obtiene del mercado oficial argentino. Las demás monedas reflejan cotizaciones internacionales.
      </p>

    </section>
  );
}

export default ExchangeRateDisplay;
