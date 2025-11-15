'use client';

interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo,
    onDelete: (id: number) => void,
    onToggleComplete: (id: number, completed: boolean) => void,
}

export function TodoItem({ todo, onDelete, onToggleComplete }: TodoItemProps) {
    const handleDelete = async () => {
        await fetch(`/api/todos/${todo.id}`, {
            method: 'DELETE',
        });

        onDelete(todo.id);
    }

    const handleToggleComplete = async () => {
        await fetch(`/api/todos/${todo.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed: !todo.completed }),
            headers: { "Content-Type": "application/json" },
        });

        onToggleComplete(todo.id, !todo.completed);
    }
    return (
        <li>
            <span className="">{todo.title}</span>
            <button onClick={handleToggleComplete}>
                {todo.completed ? "undo" : "complete"}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}
