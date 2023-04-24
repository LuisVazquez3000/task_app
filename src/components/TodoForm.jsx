import React, {useState} from 'react'

 const todoForm = ({addTodo})=> {
	
	const [value, setValue] = useState("");
	
	const handleSubmit = e =>{
		e.preventDefault();
		addTodo(value);
		
		setValue('');
		
	}
	
	return (
		<form className='TodoForm' onSubmit={handleSubmit}>
			<input type="text" className='todo-input' value={value} placeholder='Add task please'
			onChange={(e)=>setValue(e.target.value)}
			/>
			<button type='submit' className='todo-btn'>Save task</button>
		</form>
	)
}


export default todoForm;