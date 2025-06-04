import {createContext, useContext, useEffect, useState} from "react";

export const TasksContext = createContext(null);

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TasksContext);
    console.log(context)
    if (!context) {
        throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;

}

export default TasksProvider;