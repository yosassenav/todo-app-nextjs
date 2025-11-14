import { prisma } from '@/app/lib/prisma'
import { TodoForm } from './components/TodoForm';
//import { TodoItem } from './components/TodoItem';

export default async function Home() {

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoForm />
    </div>
  );
}
