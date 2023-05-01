import "../../scss/header.scss"
import logo from '../../img/logo.png'
import ic_menu from '../../img/ic-menu.svg'

export function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
                <ul className="menu">
                    <li className="menu--item">
                        <img src={ic_menu.toString()}></img>
                        <span>Меню</span>
                    </li>
                    <li className="menu--item"><span>Каталог</span></li>
                    <li className="menu--item"><span>Сервис</span></li>
                    <li className="menu--item"><span>Статьи</span></li>
                    <li className="menu--item"><span>О нас</span></li>
                </ul>
            <div className="contacts">
                <span>Контакты</span>
            </div>
        </div>
    )
}