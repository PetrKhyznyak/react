import {createContext, useContext, useEffect, useState} from "react";

const url = "https://dev.to/api/articles";

const ArticlesContext = createContext(null);

const ArticlesProvider = ({children}) => {
    const [articles, setArticles] = useState([]);

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

    return (
        <ArticlesContext.Provider value={{articles, setArticles}}>
            {children}
        </ArticlesContext.Provider>
    );

}
export const useTaskContext = () => {
    const context = useContext(ArticlesContext);
    if (context === null) {
        throw new Error("useTaskContext must be used within a ArticlesProvider");
    }
    return context;
}

export default ArticlesProvider;