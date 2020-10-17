import React, {useState} from 'react'



const Todo = props => {

    const [edit, setEdit] = useState(props.todo.task);
    const [disabled, setDisabled] = useState(true)

    const handleCheck = ()=>{
        
        props.remove((prevState)=>{
            const newState = [...prevState]
            const index = prevState.findIndex((elem)=>elem.id === props.todo.id)
            newState[index] = {...props.todo, checked:!newState[index].checked}
            return newState
        })
    }

    const handleRemove = (e) => {
        e.stopPropagation()
        props.remove((prevState)=>{
        const newState = [...prevState]
            const index = prevState.findIndex((elem)=>elem.id === props.todo.id)
            //newState[index] = {...props.todo, checked:!newState[index].checked}
            newState.splice(index,1)
            return newState
        })
    }


    const handleEdit = (e) => {
        e.stopPropagation()
        if (disabled === true ) {
            setDisabled(false)
        } else {
            setDisabled(true)
            props.remove((prevState)=>{
                const newState = [...prevState]
                const index = prevState.findIndex((elem)=>elem.id === props.todo.id)
                newState[index] = {...props.todo, task: edit}
                return newState
            })

        }
        }

    return (
        <div>
            
            <li
            className={`${props.todo.checked ? "checked" : ""}`} 
            onClick = {(e)=> {handleCheck(e) }}
            > 
            <form onClick={(e)=> e.stopPropagation()}>
            <input onChange={(e)=> setEdit(e.target.value)} value={edit} disabled={disabled}/>
            </form>
            
            <span>
            
                <button type='button' style={{float: 'right'}} onClick={(e)=>handleRemove(e)}>Delete</button>
    <button onClick={(e)=>handleEdit(e)} type='button' style={{float: 'right'}}>{disabled?"Edit":"Save"}</button>
            </span>
            </li>
            
            
        </div>
        
    )
}

export default Todo