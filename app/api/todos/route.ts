import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

// POST new todo
export async function POST(req: Request) {

    try {
        const body = await req.json();
        const { title, description } = body;

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 });
        }

        const newTodo = await prisma.todo.create({
            data: {
                title,
                description,
                completed: false,
            },
        });

        return NextResponse.json(newTodo, { status: 201 });

    } catch (error: any) {
        console.error('Error creating todo', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

//Fetch all todos
export async function GET() {
    try {
        const todos = await prisma.todo.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return NextResponse.json(todos, { status: 200 });
    } catch (error: any) {
        console.error('Error fetching todos', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


