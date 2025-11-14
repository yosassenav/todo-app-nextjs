'use client';

import React, { useState } from "react";

interface Todo {
    title: string,
    description?: string;

}

export const TodoForm = () => {
    const [todo, setTodo] = useState<Todo>({ title: '', description: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // with prev we have the latest state
        setTodo((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!todo.title.trim()) {
            alert('Todo title cannot be empty');
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit} className="">
            <input
                type="text"
                name="title"
                placeholder="todo title"
                value={todo.title}
                onChange={handleChange}
                className=""
                required
            />
            <textarea
                name="description"
                placeholder=""
                value={todo.description}
                onChange={handleChange}
                className=""
            />
            <button
                type="submit"
                className=""
            >
                Add Todo
            </button>
        </form>
    )
}
