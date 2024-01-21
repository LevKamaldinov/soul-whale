import { Link } from "react-router-dom";

import './appHeader.css';
import logo from '../../recources/img/Logo.png'

const AppHeader = () => {
    return (
        <header className="app__header">
            <Link to='info'>
                Полезная информация
            </Link>
            <Link to='/'>
                <h1>
                    <figure className="app__logo">
                        <img src={logo} alt='logoWhale' className="app__logo"></img>
                    </figure>
                    SoulWhale
                </h1>
            </Link>
            <Link to='catalog'>
                Каталог
            </Link>
    </header>
    )
}




export default AppHeader;