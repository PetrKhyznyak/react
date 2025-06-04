import './App.css'
import TasksProvider from "./Context/TasksContext.jsx";
import Header from "./Components/Headers/Header.jsx";
import Todo from "./Components/Todo/Todo.jsx";


function App() {

    return (
        <>
            <Header/>
            <div className="container">
                <TasksProvider>
                    <Todo/>
                </TasksProvider>
            </div>
        </>
    )
}

export default App
