import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { monsterRouter } from './routes/monsters';
import { notesRouter } from './routes/notes';


const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    '/',
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: 'Hello World!',
        });
    }
);


// routers
app.use('/api/monsters', monsterRouter);
app.use('/api/notes', notesRouter);


try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}