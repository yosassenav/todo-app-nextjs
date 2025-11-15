'use client';

import React, { useState } from "react";

interface Todo {
    title: string,
    description?: string;

}

export function TodoForm() {
    const [todo, setTodo] = useState<Todo>({ title: '', description: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // with prev we have the latest state
        setTodo((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!todo.title.trim()) {
            alert('Todo title cannot be empty');
            return;
        }

        //fetching the todo api
        try {
            const res = await fetch('/api/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                setTodo({ title: '', description: '' });
            } else {
                console.error('Failed to add todo')
            }

        } catch (error: any) {
            console.error('Error in submitting todo', error)
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
                placeholder="description"
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
