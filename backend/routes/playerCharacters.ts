import { Router, Request, Response } from "express";
import { IPlayerCharacter } from "../interfaces/models/IPlayerCharacter";
import * as playerCharacterService from '../services/playerCharacter.service';


export const playerCharactersRouter = Router();

playerCharactersRouter.get('/', async (req: Request, res: Response) => {
    console.log('playerCharacters GET called');

    try {
        const allPlayerCharacters: IPlayerCharacter[] = await playerCharacterService.fetchAllPlayerCharacters();
        res.json(allPlayerCharacters);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
});

playerCharactersRouter.post('/', async (req: Request, res: Response) => {
    console.log('playerCharacters POST called');

    try {
        const body: IPlayerCharacter = req.body;
        const isBodyValid = !!body.name && !!body.race && !!body.characterClasses && !!body.level;
        if (isBodyValid) {
            const createdCharacter: IPlayerCharacter = await playerCharacterService.createPlayerCharacter(body);
            res.json(createdCharacter);
        } else {
            throw new Error('BAD_REQUEST');
        }
    } catch (err: any) {
        console.log(err);
        if (err.message === 'BAD_REQUEST') {
            res.status(400).json({ message: err.message });
        } else {
            res.status(500).json({ message: err });
        }
    }
});
