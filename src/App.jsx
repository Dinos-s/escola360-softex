import { Route, Routes } from 'react-router-dom'
import FormCadastro from './components/FormCadastro'
import FormLogin from './components/FormLogin'
import './App.css'
import FormRecSenha from './components/FormRecSenha'
import Dashboard from './components/dashboard/Dashboard'
import Mural from './components/dashboard/Mural'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route path='/recSenha' element={<FormRecSenha />} />

      {/* rotas dinamicas, para autenticação */}
      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<Mural />}/>
      </Route>
    </Routes>
  );
}

export default App;
