import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

function getData() {
    const app = express()
    app.use(express.json());
    const prisma = new PrismaClient();
    
    app.post('/createPost', async(req: Request, res: Response) => {
        const{title,description} = req.body;
        const post = await prisma.post.create({
            data: {
                title: title,
              description: description
            },
        });
        res.json(post);
    });
    
    app.get('/getPost/:id',async (req,res) => {
       const id = req.params.id;
       const post = await prisma.post.findUnique({
           where:{
               id: Number(id),
            }
        });
        res.json(post);
    });

    app.get('/listPosts',async (req,res) => {
        const posts = await prisma.post.findMany();
        res.json(posts); 
    });
    
    app.put('/updatePost/:id',async (req,res) => {
        const id = req.params.id;
        const {title, description} = req.body;
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title: title,
                description: description,
            },
        });
        res.json(post);
    });

    app.delete('/deletePost/:id',async (req, res) => {
        const id = req.params.id;
        const post = await prisma.post.delete({
            where:{
                id: Number(id),
            },
        });
        res.json(post);
    });

    return app;
}

export { getData };