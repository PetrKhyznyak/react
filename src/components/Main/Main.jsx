import { useEffect, useState} from "react";
import "./Main.css";
const url = "https://dev.to/api/articles";

const Main = () => {
    const [articles, setArticles] = useState({});

    useEffect( () => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(url);
                const articlesList = await response.json();
                setArticles(articlesList);
            } catch (e) {
                console.error(e);
            }
        };
        fetchArticles();
    }, [])
    console.log(articles);
    return (
        <main className="main">
            <h1>Articles</h1>
            <div className="articles-list">
                {articles.length > 0 ? articles.map((article) => (
                    <div key={article.id} className="article">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                )) : <p>No articles found.</p>}
            </div>
        </main>
    )
}
export default Main;