import AddIcon from '@mui/icons-material/Add';
import React, { FormEvent } from 'react';

interface FormProps {
  createTodo: (e: FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: (input: string) => void;
}

function Form({ input, setInput, createTodo }: FormProps) {
  return (
    <form className='flex justify-between bg-teal-300 p-4 rounded-lg items-center' onSubmit={createTodo}>
      <input
        className='w-full text-xl rounded-lg p-[3px]'
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit" className='ml-2 rounded-lg text-gray-800'>
        <AddIcon />
      </button>
    </form>
  );
}

export default Form;
