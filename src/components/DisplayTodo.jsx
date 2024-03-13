import '../styles.css'
export default function DisplayTodo({todos,updateTodo}){

    function toggleTodo(id){
        let final_todos = [...todos].map(function(todo){
            if(todo.id==id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        updateTodo(final_todos)
    }

    function deleteTodo(id){
        let final_todos = [...todos].filter(function(todo){
            return todo.id!==id
        })
        updateTodo(final_todos)
    }

    return (
        <>
        <ul className='list'>
            {todos.map(function(todo){
                return <li key={todo.id}>
                    
                    <label><input onChange={()=>toggleTodo(todo.id)} type="checkbox" checked={todo.completed}/>{todo.title}</label>
                    <button onClick={()=>deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
                    </li>
            })}
        </ul>
        
        </>
    )
}