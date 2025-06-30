import { IconSuccess } from "./Icons";

function GoodbyeMessage() {
  return (
    <section className="fade-in">
      <h2 className="success">
        <IconSuccess style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
        ¡Gracias por usar el cotizador de monedas!
      </h2>
      <p className="goodbye-message">Nos vemos pronto</p>
    </section>
  );
}

export default GoodbyeMessage;
