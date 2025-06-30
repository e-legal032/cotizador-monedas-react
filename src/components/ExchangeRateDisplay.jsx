import { useEffect, useState } from "react";
import { getExchangeRate } from "../services/api";
import CountUp from 'react-countup';
import { IconMoney, IconInfo } from "./Icons";

const currencyConfig = {
  USD: { symbol: 'US$', locale: 'en-US' },
  EUR: { symbol: '€', locale: 'de-DE' },
  BRL: { symbol: 'R$', locale: 'pt-BR' },
  JPY: { symbol: '¥', locale: 'ja-JP' }
};

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
    <section className="fade-in">
      <h3 className="success">Cotización actual del {currency}:</h3>
      <p className="success">
        <IconMoney style={{ marginRight: "0.5rem" }} />
        {" "}
        <CountUp
          start={0}
          end={rate}
          duration={1.4}
          decimals={2}
          prefix={currencyConfig[currency]?.symbol + " "}
          formattingFn={(value) =>
            new Intl.NumberFormat(currencyConfig[currency]?.locale || 'en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(value)
          }
        />
      </p>
      <p className="info-text">
        <IconInfo style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
        El valor del dólar se obtiene del mercado oficial argentino. Las demás monedas reflejan cotizaciones internacionales.
      </p>

    </section>
  );
}

export default ExchangeRateDisplay;
