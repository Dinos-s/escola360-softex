import { Route, Routes } from 'react-router-dom'
import FormCadastro from './components/FormCadastro'
import FormLogin from './components/FormLogin'
import './App.css'
import FormRecSenha from './components/FormRecSenha'

function App() {

  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route path='/recSenha' element={<FormRecSenha />} />
    </Routes>
  )
}

export default App
