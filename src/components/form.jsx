import {  useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Form = () => {
    const [todos, setTodo] = useState([]);
    const [task, setTasks] = useState('');
     const {isAuthenticated, user, loginWithRedirect, logout} = useAuth0();

    useEffect(() => {
        if(isAuthenticated && user){
            const userkey = `todos_${user.email}`
            const update = JSON.parse(localStorage.getItem(userkey))
            if(update) setTodo(update)
        }
        
    }, [user, isAuthenticated])

    useEffect(() => {
        if(isAuthenticated && user){
            const userkey = `todos_${user.email}`
            localStorage.setItem(userkey, JSON.stringify(todos))
        }
        
    }, [todos, isAuthenticated, user])


    function addtasks(e){
        e.preventDefault();
        if(!task.trim()) return
        setTodo([...todos, {id: Date.now(), task}])
        setTasks('')
    }


    function deleteTask(id){
       setTodo(todos.filter((todo) => todo.id !== id ))
    }

    if(!isAuthenticated){
        return (
             <div className="login-message">
                <p>You need to log in to manage your todos.</p>
                <button onClick={() => loginWithRedirect()}>Login</button>
             </div>
        )
    }

    return ( 
        <section className="todo">
            <div className="todo-cont">
                {todos.map((todo) => 
                    (<div className="todo-card" key={todo.id}>
                        <p>{todo.task}</p>
                        <i className="bi bi-trash" onClick={() => deleteTask(todo.id)}></i>
                    </div>)  )} 
            </div>

            <form onSubmit={addtasks}>
                <div>
                    <label>Enter your task</label>
                    <input type="text" placeholder="write here" required value={task} onChange={(e) => setTasks(e.target.value)}/>
                </div>
                <button type="submit">Enter</button>
            </form>
        </section>
        
     );
}
 
export default Form;