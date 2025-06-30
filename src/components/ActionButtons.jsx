import { IconRefresh, IconExit } from "./Icons";

function ActionButtons({ onNewQuery, onExit }) {
  return (
    <div className="buttons">
      <button onClick={onNewQuery}>
        <IconRefresh style={{ marginRight: "0.5rem" }} />
        Hacer otra consulta</button>
      <button onClick={onExit}>
        <IconExit style={{ marginRight: "0.5rem" }} />
        Salir</button>
    </div>
  );
}

export default ActionButtons;
