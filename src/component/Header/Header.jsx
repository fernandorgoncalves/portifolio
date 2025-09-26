import Foto from "../../assets/fotoPerfil.svg";
import TextProfile from '../TextProfile/TextProfile.jsx'
import './Header.css'

function Header() {
  return (
    <div className="container">
        <div className="container-perfil">
        <div className="container-text">
            <h1>Fernando Rocha Gonçalves</h1>
            <h2>Desenvolvedor Front-End Desenvolvedor back-end</h2>
        </div>
        <img src={Foto}  />
        </div>
        <div className="separed">
            <p></p>
        </div>
      </div>
  );
}
export default Header;
