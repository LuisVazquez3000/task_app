import React, {useState} from 'react'

 const editTodoForm = ({editTodo,task})=> {
	
	const [value, setValue] = useState(task.task);
	
	const handleSubmit = e =>{
		e.preventDefault();
		editTodo(value, task.id);
		
		setValue('');
		
	}
	
	return (
		<form className='TodoForm' onSubmit={handleSubmit}>
			<input type="text" className='todo-input' value={value} placeholder='update task please'
			onChange={(e)=>setValue(e.target.value)}
			/>
			<button type='submit' className='todo-btn'>Update task</button>
		</form>
	)
}


export default editTodoForm;