import { Route, Routes } from "react-router-dom";
import FormCadastro from "./components/FormCadastro";
import FormLogin from "./components/FormLogin";
import "./App.css";

// Rotas envolvidas no projeto
import FormRecSenha from "./components/FormRecSenha";
<<<<<<< HEAD
import Dashboard from "./components/dashboard/Dashboard";
=======
>>>>>>> 0923a43e604fa5981233082c5ec37126be2f5c11
import Mural from "./components/dashboard/Mural";
import Graficos from "./components/dashboard/graficos/graficos";
import Perfil from "./components/dashboard/perfil/Perfil";
import Boletim from "./components/dashboard/boletim/boletim";
import Historico from "./components/dashboard/historico/historico";
import Calendario from "./components/dashboard/calendario/calendario";
import TrocaSenha from "./components/dashboard/trocaSenha/trocaSenha";
<<<<<<< HEAD
=======
import Dasboard from "./components/dashboard/dashboard";
>>>>>>> 0923a43e604fa5981233082c5ec37126be2f5c11

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route path="/recSenha" element={<FormRecSenha />} />

      {/* rotas dinamicas, para autenticação */}
<<<<<<< HEAD
      <Route path="/dashboard" element={<Dashboard />}>
=======
      <Route path="/dashboard" element={<Dasboard />}>
>>>>>>> 0923a43e604fa5981233082c5ec37126be2f5c11
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
