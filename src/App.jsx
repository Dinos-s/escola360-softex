import { Route, Routes } from "react-router-dom";
import FormCadastro from "./components/FormCadastro";
import FormLogin from "./components/FormLogin";
import "./App.css";

// Rotas envolvidas no projeto
import FormRecSenha from "./components/FormRecSenha";
import Mural from "./components/dashboard/Mural";
import Graficos from "./components/dashboard/graficos/graficos";
import Perfil from "./components/dashboard/perfil/Perfil";
import Boletim from "./components/dashboard/boletim/boletim";
import Historico from "./components/dashboard/historico/historico";
import Calendario from "./components/dashboard/calendario/calendario";
import TrocaSenha from "./components/dashboard/trocaSenha/trocaSenha";
import Dasboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route path="/recSenha" element={<FormRecSenha />} />

      {/* rotas dinamicas, para autenticação */}
      <Route path="/dashboard" element={<Dasboard />}>
        <Route index element={<Mural />} />
        <Route path="graficos" element={<Graficos />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="boletim" element={<Boletim />} />
        <Route path="historico" element={<Historico />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="trocaSenha" element={<TrocaSenha />} />
      </Route>
    </Routes>
  );
}

export default App;
