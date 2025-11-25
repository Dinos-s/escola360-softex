import { useState } from "react";
import { Link } from "react-router-dom";
import logoTipo from "../assets/LOGOTIPO.png";
import "../components/Form.css";
import '../App.css';

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  return (
    <div className="form-container">
      <div className="logo">
        <img src={logoTipo} alt="Escola 360" />
      </div>

      <div className="login-card">
        <h2>Acesso ao Sistema</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail / matrícula:</label>
            <input
              type="email"
              id="email"
              placeholder="seu.email@escola.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forgot-password">
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <button className="btn-login" type="submit">
            Entrar
          </button>
        </form>

        <div className="signup-link">
          <p>
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// export default FormLogin;

// function FormLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", { email, password });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   return (
//     <div className="form-container">
//       <div className="logo">
//         <img src={logoTipo} alt="Escola 360" />
//       </div>

//       <div className="login-card">
//         <h2>Acesso ao Sistema</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="email">E-mail / matrícula:</label>
//             <input
//               type="email"
//               id="email"
//               autoFocus
//               //placeholder="seu.email@escola.com.br"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-group password-group">
//             <label htmlFor="password">Senha:</label>
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 //placeholder="******"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />

//               <button
//                 type="button"
//                 className="password-toggle-btn"
//                 onClick={togglePasswordVisibility}
//                 aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
//               >
//                 {showPassword ? "👁️" : "🔒"}
//               </button>
//             </div>
//           </div>

//           <button className="btn-login" type="submit">
//             Entrar
//           </button>
//         </form>

//         <div className="forgot-password">
//           <a href="#">Esqueceu sua senha?</a>
//         </div>

//         {/* <div className="signup-link">
//           <p>
//             <Link to="/cadastro">Cadastre-se</Link>
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// }

export default FormLogin;
