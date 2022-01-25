import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

interface INote { 
    id: string;
    title: string;
    text: string; 
}

let dummyNotes: INote[] = [
    { id: uuidv4(), title: 'session 7', text: 'session 7 text bla bla abl'},
    { id: uuidv4(), title: 'update maxHP', text: 'dont forget to update maxhp'},
    { id: uuidv4(), title: 'level 5', text: 'check new abilities'},
];

export const notesRouter = Router();

notesRouter.get('/', (req: Request, res: Response) => {
    res.json(dummyNotes);
});

notesRouter.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    res.json(dummyNotes.find(note => note.id === id));
});

notesRouter.post('/', (req: Request, res: Response) => {
    const body = req.body;

    if (!body.title || !body.text) {
        res.status(400).json({ msg: 'Please provide title and text!' });
    } else {
        const newNote: INote = {
            id: uuidv4(),
            title: body.title,
            text: body.text,
        };
        dummyNotes.push(newNote);
        res.status(201).json({ msg: 'note successfully created!', note: newNote });
    }
    
});

notesRouter.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;

    const noteExists: boolean = !!dummyNotes.find(note => note.id === id);
    if (noteExists) {
        dummyNotes = dummyNotes.filter(note => note.id !== id);
        res.status(200).json({ msg: `Note with id: ${id} has been deleted!` });
    } else {
        res.status(400).json({ msg: `No note with id ${id} found!` });
    }
});

notesRouter.patch('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const body = req.body;

    const note: INote | undefined = dummyNotes.find(note => note.id === id);
    if (!!note) {
        const updatedNote = {
            ...note,
            title: body.title ? body.title : note.title,
            text: body.text ? body.text : note.text,
        };
        dummyNotes.forEach((note, idx, arr) => {
            if (note.id === updatedNote.id) {
                arr[idx] = updatedNote;
            }
        });
        res.status(200).json({ msg: `Note with id: ${id} has been updated!`, note: updatedNote });
    } else {
        res.status(400).json({ msg: `No note with id ${id} found!` });
    }
});

notesRouter.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const body = req.body;

    const note: INote | undefined = dummyNotes.find(note => note.id === id);
    if (!!note) {
        if (!body.title || !body.text) {
            res.status(400).json({ msg: `Please provide title and text` });
        } else {
            const updatedNote: INote = { id: note.id, title: body.title, text: body.text }

            dummyNotes.forEach((note, idx, arr) => {
                if (note.id === id) {
                    arr[idx] = updatedNote;
                }
            });
    
            res.status(200).json({ msg: `Note with id: ${id} has been updated!`, note: updatedNote });
        }
    } else {
        res.status(400).json({ msg: `No note with id ${id} found!` });
    }
});






