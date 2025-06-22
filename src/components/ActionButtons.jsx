function ActionButtons({ onNewQuery, onExit }) {
  return (
    <div>
      <button onClick={onNewQuery}>🔄 Hacer otra consulta</button>
      <button onClick={onExit}>🚪 Salir</button>
    </div>
  );
}

export default ActionButtons;
