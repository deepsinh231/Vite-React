import React, { useState } from "react";
import { Usetodo } from "../Context";

function TodoForm() {
    const [todos, setstate] = useState('')
    const { addTodo } = Usetodo()
    const submitdata = (event) => {
        event.preventDefault()
        addTodo({ todos, completed: false })
        setstate("")
    }
    return (
        <form onSubmit={submitdata} className="flex" >
            <input
                value={todos}
                onChange={(e) => setstate(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

