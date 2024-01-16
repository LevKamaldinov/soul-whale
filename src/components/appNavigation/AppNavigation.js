import { Link } from "react-router-dom";
import './appNavigation.css'

const AppNavigation = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul name='menu' tabIndex={0} className="menu__box">
                <Link to='/'>
                    <li  tabIndex={0} className="menu__item">
                        Главная
                    </li>
                </Link>
                <Link to='info'>
                    <li  tabIndex={0} className="menu__item">
                        Информация для пкупателей
                    </li>
                </Link>
                <Link to='catalog'>
                    <li  tabIndex={0} className="menu__item">
                        Каталог
                    </li>
                </Link>
                {/* <Link to='contacts'>
                    <li  tabIndex={0} className="menu__item">
                        Контакты
                    </li>
                </Link> */}
            </ul>
        </div>
    )
}

export default AppNavigation;