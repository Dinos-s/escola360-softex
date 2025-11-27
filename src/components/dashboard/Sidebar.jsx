// import { NavLink } from "react-router-dom";
// import logoTipo from "../../assets/LOGOTIPO.png";
// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-header">
//         <img src={logoTipo} alt="Escola 360" />
//       </div>

//       <p className="user-greeting">Olá, Maria</p>

//       <nav className="sidebar-nav">
//         <NavLink to="/dashboard" end>
//           {" "}
//           Mural{" "}
//         </NavLink>
//         <NavLink to="/dashboard/graficos"> Gráficos </NavLink>
//         <NavLink to="/dashboard/perfil"> Perfil </NavLink>
//         <NavLink to="/dashboard/boletim"> Boletim </NavLink>
//         <NavLink to="/dashboard/historico"> Histórico </NavLink>
//         <NavLink to="/dashboard/calendario"> Calendário </NavLink>
//         <NavLink to="/dashboard/trocaSenha"> Trocar Senha </NavLink>
//       </nav>

//       <div className="sidebar-footer">
//         <a href="/">Sair</a>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoTipo from "../../assets/LOGOTIPO.png";
import "./Sidebar.css";

// =======================================================
// DEFINIÇÃO DAS ROTAS POR PERFIL
// =======================================================

const ROTAS_ALUNO = [
  { to: "/dashboard", name: "Mural", end: true },
  { to: "/dashboard/graficos", name: "Gráficos de Desempenho" },
  { to: "/dashboard/boletim", name: "Boletim" },
  { to: "/dashboard/historico", name: "Histórico" },
  { to: "/dashboard/calendario", name: "Calendário" },
  // { to: "/dashboard/calendario", name: "Gestão de Eventos" },
  { to: "/dashboard/perfil", name: "Perfil" },
  { to: "/dashboard/trocaSenha", name: "Trocar Senha" },
];

const ROTAS_PROFESSOR = [
  { to: "/dashboard", name: "Mural", end: true },
  { to: "/dashboard/notas", name: "Notas" },
  { to: "/dashboard/presenca", name: "Presença" },
  { to: "/dashboard/perfil", name: "Perfil" },
  { to: "/dashboard/trocaSenha", name: "Trocar Senha" },
];

const ROTAS_COORDENADOR = [
  { to: "/dashboard", name: "Mural", end: true },
  { to: "/dashboard/usuarios", name: "Gerenciar Usuários" },
  { to: "/dashboard/confNotas", name: " Confirma Notas" },
  { to: "/dashboard/crimural", name: "Criar Mural" },
  { to: "/dashboard/criCalendario", name: "Criar Calendário" },
  { to: "/dashboard/perfil", name: "Meu Perfil" },
  { to: "/dashboard/trocaSenha", name: "Trocar Senha" },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  // userProfile pode ser 'aluno', 'coordenador', ou null (links fechados)
  //const [userProfile, setUserProfile] = useState("aluno");
  const [userProfile, setUserProfile] = useState();

  // Funções de controle
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMenuVisibility = () => setIsMenuVisible((prev) => !prev);

  // Função para fechar o menu em mobile após o clique
  const closeMenu = () => {
    if (window.innerWidth <= 900) {
      setIsMobileMenuOpen(false);
    }
  };

  // Função que define as rotas ativas
  const getRoutes = (profile) => {
    if (profile === "coordenador") return ROTAS_COORDENADOR;
    if (profile === "aluno") return ROTAS_ALUNO;
    if (profile === "professor") return ROTAS_PROFESSOR;
    return [];
  };

  // Função para renderizar o NavMenu
  const renderNavMenu = (profile) => {
    const routes = getRoutes(profile);
    return (
      <nav id="sidebar-nav" className="sidebar-nav">
        {routes.map((route, index) => (
          <NavLink
            key={index}
            to={route.to}
            end={route.end || false}
            onClick={closeMenu}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    );
  };

  // Função que lida com o clique no botão de perfil
  const handleProfileClick = (profileName) => {
    // Se o perfil clicado já estiver ativo, ele fecha (seta para null)
    // Se estiver inativo, ele ativa o perfil
    setUserProfile(userProfile === profileName ? null : profileName);
  };

  return (
    <aside className={`sidebar ${isMenuVisible ? "" : "collapsed"}`}>
      {/* --- CABEÇALHO SUPERIOR (Desktop Toggle + Mobile Hambúrguer) --- */}
      {/* <div className="sidebar-header-top">
        <button
          className="toggle-visibility-btn desktop-only"
          onClick={toggleMenuVisibility}
        >
          {isMenuVisible ? "<<" : ">>"}
        </button>

        {/* Cabeçalho Mobile (Sempre Visível) */}
      {/* </aside><div className="sidebar-header-mobile">
          <img src={logoTipo} alt="Escola 360" className="sidebar-logo" />

          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div> */}

      {/* --- CONTEÚDO PRINCIPAL DO SIDEBAR --- */}
      <div
        className={`sidebar-content ${isMobileMenuOpen ? "mobile-open" : ""}`}
      >
        {/* Logo Desktop (Oculta em mobile) */}
        <img
          src={logoTipo}
          alt="Escola 360"
          className="sidebar-logo desktop-only"
        />

        <p className="user-greeting">Olá, João</p>

        {/* --- BOTÕES DE FILTRO DE PERFIL E LINKS --- */}
        <div className="profile-switcher">
          <button
            onClick={() => handleProfileClick("aluno")}
            className={`profile-btn ${userProfile === "aluno" ? "active" : ""}`}
            title="Visualizar rotas do Aluno"
          >
            Aluno
          </button>
          {/* LINKS DO ALUNO (Visível se 'aluno' estiver ativo) */}
          {userProfile === "aluno" && renderNavMenu("aluno")}

          <button
            onClick={() => handleProfileClick("professor")}
            className={`profile-btn ${
              userProfile === "professor" ? "active" : ""
            }`}
            title="Visualizar rotas do Professor"
          >
            Professor
          </button>
          {/* LINKS DO PROFESSOR (Visível se 'professor' estiver ativo) */}
          {userProfile === "professor" && renderNavMenu("professor")}

          <button
            onClick={() => handleProfileClick("coordenador")}
            className={`profile-btn ${
              userProfile === "coordenador" ? "active" : ""
            }`}
            title="Visualizar rotas do Coordenador"
          >
            Coordenador
          </button>
          {/* LINKS DO COORDENADOR (Visível se 'coordenador' estiver ativo) */}
          {userProfile === "coordenador" && renderNavMenu("coordenador")}
        </div>
      </div>
      {/* --- FIM DOS BOTÕES DE PERFIL --- */}

      <div className="sidebar-footer">
        <a href="/">Sair</a>
      </div>
    </aside>
  );
};

export default Sidebar;
