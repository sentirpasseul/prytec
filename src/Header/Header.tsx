import "../scss/header.scss"

export function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li className="menu--item">Меню</li>
                    <li className="menu--item">Каталог</li>
                    <li className="menu--item">Сервис</li>
                    <li className="menu--item">Статьи</li>
                    <li className="menu--item">О нас</li>
                </ul>
            </div>
            <div className="contacts"></div>
        </div>
    )
}