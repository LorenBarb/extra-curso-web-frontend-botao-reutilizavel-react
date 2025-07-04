import React from "react";
import Button from "./components/Button/Button";
import { FaSave, FaTimes, FaExclamationTriangle, FaBan } from "react-icons/fa";

function App() {
  const handleClick = () => alert("Botão clicado!");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Botões Reutilizáveis com Ícones</h1>

      <Button
        text="Salvar"
        icon={<FaSave />}
        onClick={handleClick}
        styleType="primary"
      />

      <Button
        text="Cancelar"
        icon={<FaTimes />}
        onClick={handleClick}
        styleType="secondary"
      />

      <Button
        text="Perigo"
        icon={<FaExclamationTriangle />}
        onClick={handleClick}
        styleType="danger"
      />

      <Button
        text="Desativado"
        icon={<FaBan />}
        onClick={handleClick}
        disabled={true}
      />
    </div>
  );
}

export default App;