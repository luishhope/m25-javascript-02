import LogoSenai from './assets/logo-senai.png';
import MenuHamburguer from './assets/menu.svg';
import Login from './assets/login.svg';
import Pesquisa from './assets/search.svg';
import './style.css';

export default function Header() {
    return (
        <div className='cabecalho'>
            <img src={MenuHamburguer} alt="imagem do menu"/>
            <img src={LogoSenai} alt="LogoTipo do Senai"/>
            <img src={Login} alt="imagem do login"/>
            <img src={Pesquisa} alt="imagem da pesquisa"/>
        </div>
    );
}