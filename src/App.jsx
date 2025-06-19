import { useState, useEffect } from 'react'
// import './App.css'
import { TodoProvider } from "./contexts/"
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  
  const [todos, setTodos] = useState([])

  // todo - ek indivisual string hai
  // todos - pura arr hai todo ki
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  // { ...todo } spreads the existing todo data (message, completed status, etc.).
  // The full array [newTodo, ...prev] creates a new todo list with the newest one on top.

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    // yaha pe ek naya arr bana hai ek particular todo ko delete karke isliye filter use kar rahe hai
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
    // This hook runs only once when the component first mounts (because the dependency array is empty []).
    // It reads from localStorage to load previously saved todos.
    // If any todos are found, they’re set into React state using setTodos().

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])
      // This hook runs every time the todos state changes.
      // It saves the updated todos list into localStorage.
      // Uses JSON.stringify() because localStorage only stores strings.
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
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
