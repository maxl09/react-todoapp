import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask) {
            return
        }
        const item = {
            id: Math.floor(Math.random() * 10000),
            value: newTask,
            isComplete: false
        }
        setTasks(oldTasks => [...oldTasks, item]);
        setNewTask('');
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const completeTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, isComplete: !task.isComplete } : task))
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
                        <p className={task.isComplete ? 'completed' : ''}>{task.value}</p>
                        <div className="icon-container" >
                            <FontAwesomeIcon className="icon" key={task.id} onClick={() => completeTask(task.id)} icon={faCheck} /><FontAwesomeIcon className="icon" onClick={() => deleteTask(task.id)} icon={faTrash} />
                        </div>
                    </div>
                )}

            </div>
        </div>

        </>)
}

export default TodoApp