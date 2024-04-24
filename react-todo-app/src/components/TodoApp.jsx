import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask) {
            return
        }
        const item = {
            id: Math.floor(Math.random() * 10000),
            value: newTask
        }
        setTasks(oldTasks => [...oldTasks, item]);
        setNewTask('');
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const completeTask = (id) => {
        let updatedTodos = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !todo.isComplete;
            }
            return task;
        });
        setTasks(updatedTodos);
    }

    return (
        <>  <div className="todo-wrapper">
            <div className="todo-container">
                <h1>To Do App</h1>
                <div className="input-container">
                    <input type="text" placeholder="Enter task" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
                    <button type="submit" onClick={() => addTask()} >Add</button>
                </div>

                {tasks.map((task) =>
                    <div className="task-container">
                        <p className={task.isComplete ? 'completed' : ''} key={task.id} onClick={() => completeTask(task.id)}>{task.value}</p>
                        <span className="icon" onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                )}

            </div>
        </div>

        </>)
}

export default TodoApp