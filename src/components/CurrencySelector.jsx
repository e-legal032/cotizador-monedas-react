function CurrencySelector({ onSelectCurrency }) {
  return (
    <section>
      <h2>¿Qué cotización querés saber?</h2>
      <div>
        <button onClick={() => onSelectCurrency("USD")}>🇺🇸 Dólar</button>
        <button onClick={() => onSelectCurrency("EUR")}>Euro</button>
        <button onClick={() => onSelectCurrency("BRL")}>Real</button>
        <button onClick={() => onSelectCurrency("JPY")}>Yen</button>
      </div>
    </section>
  );
}

export default CurrencySelector;
