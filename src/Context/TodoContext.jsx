import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "This Msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    completedtodo: (id) => { }
})


export const Usetodo = () => {
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider