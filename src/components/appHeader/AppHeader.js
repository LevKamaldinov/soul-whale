import { Link } from "react-router-dom";

import AppNavigation from "../appNavigation/AppNavigation";
import './appHeader.css';
import logo from '../../recources/img/logoWhale.png'

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <figure className="app__logo">
                    <img src={logo} alt='logoWhale'></img>
                </figure>
                <Link to='/'>
                    <span>Soul Whale</span>
                </Link>
            </h1>
            <nav className="app__menu">
                <AppNavigation/>
            </nav>
    </header>
    )
}

export default AppHeader;