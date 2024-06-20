import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoType } from "../Types";

interface TodoProps {
  todos: TodoType;
  deleteTodo: (id: string) => Promise<void>;
  toggleComplete: (todos: TodoType) => Promise<void>;
}

function Todo({ todos, deleteTodo, toggleComplete }: TodoProps) {
  return (
    <li className='p-2 bg-teal-300 my-2 rounded-md shadow-sm'>
      <div className='flex justify-between items-center'>
        <p 
          className={todos.completed 
            ? "text-gray-700 cursor-pointer line-through opacity-20"
            : 'text-gray-700 cursor-pointer'}
          onClick={() => toggleComplete(todos)}>
          {todos.text}
        </p>
        <div className="flex gap-3">
          <button onClick={() => toggleComplete(todos)}>
            <CheckIcon />
          </button>
          <button onClick={() => deleteTodo(todos.id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todo;
