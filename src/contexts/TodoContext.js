import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
    // functionalities me sirf naam likhte defination nhi likhte 
    // matlab yaha addTodo ek func hai aur todo ek msg hai vo pass karne ke badd vo func kuch kaam karega vo hum App.jsx me define karenge

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider