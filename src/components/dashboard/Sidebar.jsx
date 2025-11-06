import { NavLink } from 'react-router-dom';
import logoTipo from '../../assets/LOGOTIPO.png';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src={logoTipo} alt="Escola 360" />
            </div>

            <p className="user-greeting">Olá, Maria</p>

            <nav className="sidebar-nav">
                <NavLink to="/mural"> Mural </NavLink>
                <NavLink to="/perfil"> Mural </NavLink>
                <NavLink to="/boletim"> Mural </NavLink>
                <NavLink to="/recSenha"> Mural </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;