import { Link } from "react-router-dom";

import AppNavigation from "../appNavigation/AppNavigation";
import './appHeader.css';
// import logo from '../../recources/img/logoWhale.png'
import logo from '../../recources/img/logo.jpg'

const AppHeader = () => {
    return (
        <header className="app__header">
            <Link to='info'>
                Информация для пoкупателей
            </Link>
            <h1>
                <Link to='/'>
                    <figure className="app__logo">
                        <img src={logo} alt='logoWhale' className="app__logo"></img>
                    </figure>
                </Link>
                <span>SoulWhale</span>
            </h1>
            <Link to='catalog'>
                Каталог
            </Link>
            {/* <nav className="app__menu">
                <AppNavigation/>
            </nav> */}
    </header>
    )
}




export default AppHeader;