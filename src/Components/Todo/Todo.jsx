import {useTasks} from "../../Context/TasksContext.jsx";
import "./Todo.css";
import ModalUpdate from "../ModalUpdate/ModalUpdate.jsx";


const Todo = () => {
    const { tasks, setTasks } = useTasks();
    console.log(tasks);
    return (
        <>
            <form className={"todo-form"} action="#" onSubmit={(e) => {
                e.preventDefault();
                setTasks(prev => [...prev, {
                    id: Date.now(),
                    title: document.querySelector("#todo").value,
                    completed: false,
                    date: Date.now(),
                }]);
            }}>
                <label className={"form-label"} htmlFor="todo">Add todo</label>
                <input type="text" id="todo" placeholder="" required/>
                <button className={"add-button"}>Add</button>
            </form>
            <div className="todo-list">
                {tasks.map((task) => (
                    <div className={`todo-item ${task.completed ? "completed" : ""}`} key={task.id}>
                        <div className="todo-item__content">
                            <input className={"checkbox"} type="checkbox" checked={task.completed} onChange={() => setTasks(prev => prev.map(t => t.id === task.id ? {...t, completed: !task.completed} : t))}/>
                            <div>
                                <p className={`todo-item__text ${task.completed ? "completed-text" : ""}`}>{task.title}</p>
                                <p className="todo-item__date">{new Date(task.date).toLocaleDateString('uk-UA')}</p>
                            </div>
                        </div>
                        <div className="button-wrapper">
                            {/*<button className={"update-button"}>Update</button>*/}
                            <ModalUpdate onUpdate={() => {
                                const updatedTitle = document.querySelector("#update-todo").value;
                                setTasks(prev => prev.map(t => t.id === task.id ? {...t, title: updatedTitle, date: Date.now()} : t));
                            }}>
                                <h2>Update Task</h2>
                                <input type="text" id="update-todo" placeholder="Update todo" defaultValue={task.title} required/>
                            </ModalUpdate>
                            <button className={"delete-button"} onClick={() => {
                                setTasks(prev => prev.filter(t => t.id !== task.id));
                            }}>Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todo;