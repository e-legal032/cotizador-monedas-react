import { useState } from "react";
import CurrencySelector from "./components/CurrencySelector";
import ExchangeRateDisplay from "./components/ExchangeRateDisplay";
import ActionButtons from "./components/ActionButtons";
import GoodbyeMessage from "./components/GoodbyeMessage";

function App() {
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
      {step === "select" && (
        <CurrencySelector onSelectCurrency={handleCurrencySelection} />
      )}

      {step === "result" && (
        <>
          <ExchangeRateDisplay currency={selectedCurrency} />
          <ActionButtons
            onNewQuery={handleNewQuery}
            onExit={handleExit}
          />
        </>
      )}

      {step === "goodbye" && <GoodbyeMessage />}

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
    </main>
  );
}

export default App;
