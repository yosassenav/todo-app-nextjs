'use client';

import { useState } from "react";

interface Todo {
    title: string,
    description?: string;

}

export const TodoForm = () => {
    const [todo, setTodo] = useState<Todo>({ title: '', description: '' });
    return (
        <form>
            <input />
        </form>
    )
}
