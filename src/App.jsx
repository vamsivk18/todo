import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import DisplayTodo from './components/DisplayTodo'
import './styles.css'
function App() {
  const [todos,setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue==null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function updateTodo(updated_todos){
    console.log(updated_todos)
    setTodos([...updated_todos])
  }

  return (
    <>
    <CreateTodo todos={todos} updateTodo={updateTodo}/>
    <h1 className='header'>Todos</h1>
    <DisplayTodo todos={todos} updateTodo={updateTodo}/>
    </>
  )
}

export default App
