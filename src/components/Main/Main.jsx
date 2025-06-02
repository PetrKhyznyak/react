
import "./Main.css";

import { useTaskContext } from "../../Context/AriclesContext.jsx";

const Main = () => {

    const { articles } = useTaskContext();


    console.log(articles);
    return (
        <main className="main">
            <h1>Articles</h1>
            <div className="articles-list">
                {articles.length > 0 ? articles.slice(0, 5).map((article) => (
                    <div key={article.id} className="article">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        {/*<a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>*/}
                    </div>
                )) : <p>No articles found.</p>}
            </div>
        </main>
    )
}
export default Main;