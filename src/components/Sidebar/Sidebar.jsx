import "./Sidebar.css";
const Sidebar = () => {
    return(
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><a href="#">Початок роботи</a></li>
                    <li><a href="#">Перенаправлення рефів</a></li>
                    <li><a href="#">Фрагменти</a></li>
                </ul>
            </nav>
        </aside>
    )
}
export default Sidebar;