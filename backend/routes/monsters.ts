import { Router, Request, Response } from "express";
import { IMonster } from "../interfaces/models/IMonster";
import * as monsterService from "../services/monster.service";


export const monsterRouter = Router();

monsterRouter.get('/', async (req: Request, res: Response) => {
    const allMonsters: IMonster[] = await monsterService.fetchAllMonsters();
    res.json(allMonsters);
});

// .then is not so pretty

// monsterRouter.get('/', (req: Request, res: Response) => {
//     fetchAllMonsters().then((monstersArr: IMonster[]) => {
//         res.json(monstersArr);
//     });
// })

monsterRouter.get('/:name', async (req: Request, res: Response) => {
    const monsterName: string = req.params.name;
    const monster: IMonster = await monsterService.fetchMonsterByName(monsterName);
    res.json(monster);
});

// module.exports = monsterRouter;