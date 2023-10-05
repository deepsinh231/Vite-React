import React, { useEffect, useState } from 'react'
import { TodoProvider, Usetodo } from './Context'
import { TodoForm, TodoItem } from './Component'

function App() {
  const [todos, settodo] = useState([])
  const addTodo = (todo) => {
    settodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    settodo((e) => e.map((pervetod) => (pervetod.id === id ? todo : pervetod)))
  }
  const deleteTodo = (id) => {
    settodo((pre) => pre.filter((todo) => todo.id !== id))
  }
  const completedtodo = (id) => {
    settodo((prev) => prev.map((prevtodo) => prevtodo.id == id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      settodo(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value={{ addTodo, completedtodo, deleteTodo, todos, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
