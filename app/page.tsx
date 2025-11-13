import { prisma } from '@/app/lib/prisma'
import { TodoItem } from './components/TodoItem';

export default async function Home() {

  return (
    <div>
      <TodoItem />
    </div>
  );
}
