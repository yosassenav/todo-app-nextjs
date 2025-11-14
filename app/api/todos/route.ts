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


//Delete todo
export async function DELETE(req: Request) {

    //deleting todo by using query params
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'TODO id is required' }, { status: 400 })
        }
        const deletedTodo = await prisma.todo.delete({
            where: { id: Number(id) },
        })
        return NextResponse.json(deletedTodo, { status: 200 });

    } catch (error: any) {
        console.error('Error deleting todo', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}
