import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

function getData() {
    const app = express()
    app.use(cors());
    app.use(express.json());
    const prisma = new PrismaClient();
    
    app.post('/createPost', async(req: Request, res: Response) => {
        const{title,description} = req.body;
        const post = await prisma.post.create({
            data: {
                title: title,
              description: description,
              likes: 0,
              dislikes: 0
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

    app.put('/updateLikes/:id',async (req,res) => {
        const id = req.params.id;
        const {likes} = req.body;
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                likes: likes,
            },
        });
        res.json(post);
    });

    app.put('/updateDislikes/:id',async (req,res) => {
        const id = req.params.id;
        const {dislikes} = req.body;
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                dislikes: dislikes,
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