import { useState, useEffect } from "react";
import CurrencySelector from "./components/CurrencySelector";
import ExchangeRateDisplay from "./components/ExchangeRateDisplay";
import ActionButtons from "./components/ActionButtons";
import GoodbyeMessage from "./components/GoodbyeMessage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
  document.body.classList.toggle("dark-mode", isDarkMode);
}, [isDarkMode]);

  const [step, setStep] = useState("select");
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleCurrencySelection = (currency) => {
    setSelectedCurrency(currency);
    setStep("result");
  };

  const handleNewQuery = () => {
    setSelectedCurrency(null);
    setStep("select");
  };

  const handleExit = () => {
    setStep("goodbye");
  };

  return (
  <main>
    <div className="page">
      <div className="container">
        {step === "select" && (
          <>
            <header className="app-header">
              <div className="header-center">
                <img
                  src="/logo.png"
                  alt="Logo cotizador"
                  className="logo"
                />
                <h1 className="app-title">Cotizador de Monedas</h1>
              </div>
              <div className="theme-toggle-wrapper">
                <ThemeToggle />
              </div>
            </header>

            <section className="section fade-in">
              <CurrencySelector onSelectCurrency={handleCurrencySelection} />
            </section>
          </>
        )}

        {step === "result" && (
          <>
            <section className="section fade-in">
              <ExchangeRateDisplay currency={selectedCurrency} />
            </section>
            <section className="section buttons fade-in">
              <ActionButtons
                onNewQuery={handleNewQuery}
                onExit={handleExit}
              />
            </section>
          </>
        )}

        {step === "goodbye" && (
          <section className="section fade-in">
            <GoodbyeMessage />
          </section>
        )}
      </div>

      <footer>
        <small>
          Datos provistos por{" "}
          <a
            href="https://www.exchangerate-api.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ExchangeRate-API
          </a>
        </small>
      </footer>
    </div>
  </main>
);
}

export default App;
