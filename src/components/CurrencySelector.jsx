function CurrencySelector({ onSelectCurrency }) {
  return (
    <section className="fade-in">
      <h2 className="section-title">¿Qué cotización querés saber?</h2>
      <div className="currency-button-group">
        <button className="currency-button" onClick={() => onSelectCurrency("USD")}>
          <img src="/icons/usa-flag.svg" alt="Dólar" className="flag-icon" />
          Dólar
        </button>
        <button className="currency-button" onClick={() => onSelectCurrency("EUR")}>
          <img src="/icons/euro-flag.svg" alt="Euro" className="flag-icon" />
          Euro
        </button>
        <button className="currency-button" onClick={() => onSelectCurrency("BRL")}>
          <img src="/icons/brazil-flag.svg" alt="Real" className="flag-icon" />
          Real
        </button>
        <button className="currency-button" onClick={() => onSelectCurrency("JPY")}>
          <img src="/icons/japan-flag.svg" alt="Yen" className="flag-icon" />
          Yen
        </button>
      </div>
    </section>
  );
}

export default CurrencySelector;
