import '../styles.css'
import { useState } from "react"
export default function CreateTodo({todos,updateTodo}){
    const [title,setTitle] = useState("")
    function addTodo(todo){ 
        console.log(todo)
        let new_todos = [...todos,todo]
        updateTodo(new_todos)
        setTitle("")
    }

    return(
        <form className='new-item-form' onSubmit={(e)=>e.preventDefault()}>
            <div className='form-row'>
                <label htmlFor="item">Enter new Todo</label>
                <input type="text" id="item" value={title} onChange={function(e){setTitle(e.target.value)}}/>
                <button className='btn' onClick={()=>addTodo({id:crypto.randomUUID(),title:title,completed:false})}>Add</button>
            </div>
        </form>
        
    )
}