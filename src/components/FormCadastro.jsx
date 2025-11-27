import { useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import logoTipo from "../assets/LOGOTIPO.png";
import "../components/Form.css";
// import '../App.css';

function FormCadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dataNascimento: "",
    cpf: "",
    password: "",
    confirm_password: ""
  });

  // Função genérica para atualizar o estado quando qualquer campo do formulário mudar.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário
    if (formData.password == formData.confirm_password) {
      console.log(formData);
      navigate('/')
    } else {
      alert('As senhas não são compatíveis')
    }
    
  };

  return (
    <div className="form-container">
      <div className="logo">
        <img src={logoTipo} alt="logotipo" />
      </div>

      <div className="login-card">
        <h2>Formulário de Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Confirme a Senha:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn-login" type="submit">
            Cadastrar
          </button>
        </form>

        <div className="signup-link">
          <p>
            <Link to="/">Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormCadastro;
