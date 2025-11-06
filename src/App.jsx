import { Route, Routes } from "react-router-dom";
import FormCadastro from "./components/FormCadastro";
import FormLogin from "./components/FormLogin";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
    </Routes>
  );
}

export default App;
