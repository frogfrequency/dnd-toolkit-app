import { Router, Request, Response } from "express";
import { IMonster } from "../interfaces/models/IMonster";
import * as monsterService from "../services/monster.service";


export const monsterRouter = Router();

monsterRouter.get('/', async (req: Request, res: Response) => {
    console.log('/ (allMonsters) called');
    const allMonsters: IMonster[] = await monsterService.fetchAllMonsters();
    res.json(allMonsters);
});

// .then is not so pretty

// monsterRouter.get('/', (req: Request, res: Response) => {
//     fetchAllMonsters().then((monstersArr: IMonster[]) => {
//         res.json(monstersArr);
//     });
// })

monsterRouter.get('/filter', async (req: Request, res: Response) => {
    var query = require('url').parse(req.url,true).query; // SANDROSANDROSANDRO https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js   Peter Mortensen 86 upvotes
    const filterProperty: string = query.filterProperty;
    const filterValue = query.filterValue;
    const monstersWithSpecificFilter: IMonster[] = await monsterService.fetchAllMonstersWithSpecificFilter(filterProperty, filterValue);
    res.json(monstersWithSpecificFilter);
}); 

monsterRouter.get('/:name', async (req: Request, res: Response) => {
    console.log('/:name called');
    const monsterName: string = req.params.name;
    const monster: IMonster | number = await monsterService.fetchMonsterByName(monsterName);
    
    res.json(monster);
});

monsterRouter.get('/type/:type', async (req: Request, res: Response) => { // is theoretically not needed anymore because you can use the '/stringfilter'-route to filter for types etc..
    const typeName = req.params.type;
    const allMonsters: IMonster[] = await monsterService.fetchAllMonsters();
    const allMonstersWithSpecifiedType: IMonster[] = allMonsters.filter(monster => monster.type === typeName)
    res.json(allMonstersWithSpecifiedType);
}); 


// module.exports = monsterRouter;