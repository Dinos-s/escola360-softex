import { Route, Routes } from "react-router-dom";
import FormCadastro from "./components/FormCadastro";
import FormLogin from "./components/FormLogin";
import "./App.css";

// Rotas envolvidas no projeto
import FormRecSenha from "./components/FormRecSenha";
import Dashboard from "./components/dashboard/Dashboard";
import Mural from "./components/dashboard/Mural";
import Graficos from "./components/dashboard/graficos/graficos";
import Perfil from "./components/dashboard/perfil/Perfil";
import Boletim from "./components/dashboard/boletim/boletim";
import Historico from "./components/dashboard/historico/historico";
import Calendario from "./components/dashboard/calendario/calendario";
import TrocaSenha from "./components/dashboard/trocaSenha/trocaSenha";
import Notas from "./components/dashboard/notas/notas";
import Presenca from "./components/dashboard/presenca/presenca";
import Usuarios from "./components/dashboard/usuarios/usuarios";
import Crimural from "./components/dashboard/crimural/crimural";
import ConfNotas from "./components/dashboard/confNotas/confNotas";
import CriCalendario from "./components/dashboard/criCalendario/criCalendario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route path="/recSenha" element={<FormRecSenha />} />

      {/* rotas dinamicas, para autenticação */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Mural />} />
        <Route path="graficos" element={<Graficos />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="boletim" element={<Boletim />} />
        <Route path="historico" element={<Historico />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="trocaSenha" element={<TrocaSenha />} />
        <Route path="notas" element={<Notas />} />
        <Route path="presenca" element={<Presenca />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="crimural" element={<Crimural />} />
        <Route path="confNotas" element={<ConfNotas />} />
        <Route path="criCalendario" element={<CriCalendario />} />
      </Route>
    </Routes>
  );
}

export default App;
