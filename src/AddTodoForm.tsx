import React, { ChangeEvent, FormEvent, useState } from 'react'

interface AddTodoFormProps {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {

    const [nweTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(nweTodo);
    }

    return (
        <form>
            <input type="text" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Todo</button>            
        </form>
    )
}

export default AddTodoForm;
