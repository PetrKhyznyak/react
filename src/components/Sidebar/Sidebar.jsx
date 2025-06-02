import "./Sidebar.css";
import { useTaskContext } from "../../Context/AriclesContext.jsx";
const Sidebar = () => {

    const { articles } = useTaskContext();

    return(
        <aside className="sidebar">
            <nav>
                <ul>
                    {
                        articles.length > 0 ? articles.slice(0, 5).map((article) => (
                            <li key={article.id} className="article">
                                <a href={article.url}>{article.title}</a>
                            </li>
                        )) : <li>No articles found.</li>
                    }
                </ul>
            </nav>
        </aside>
    )
}
export default Sidebar;