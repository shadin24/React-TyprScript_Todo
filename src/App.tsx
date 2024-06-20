import { collection, onSnapshot, query, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import Form from './components/Form';
import { useState, useEffect, FormEvent } from 'react';
import Todo from './components/Todo';
import { db } from './components/Firebase';

interface TodoType {
  id: string;
  text?: string;
  completed: boolean;
}

export default function App() {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [input, setInput] = useState('');

  // Create
  const createTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter something.');
      return;
    }
    try {
      await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false,
      });
      setInput('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  // Read
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoArr: TodoType[] = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({
          ...(doc.data() as TodoType),
          id: doc.id,
        });
      });
      setTodo(todoArr);
    });
    return () => unsubscribe();
  }, []);

  // Delete
  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  // Update
  const toggleComplete = async (todo: TodoType) => {
    try {
      await updateDoc(doc(db, 'todos', todo.id), {
        completed: !todo.completed,
      });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className="h-screen w-screen bg-teal-400 p-4 overflow-y-scroll">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h1 className='text-xl font-bold text-center p-2 text-gray-800'>A DEV'S TODO LIST</h1>
        <Form input={input} setInput={setInput} createTodo={createTodo} />
        <ul>
          {todo.map((todos) => (
            <Todo key={todos.id} todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className="text-center">
          {`You have ${todo.length} ${todo.length === 1 ? 'thing' : 'things'} to complete`}
        </p>
      </div>
    </div>
  );
}
