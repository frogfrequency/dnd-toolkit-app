import axios from 'axios';
import { IAllMonstersApiResponse, IMonster } from '../interfaces/models/IMonster'

const monsterApiBaseURL = 'https://api.open5e.com/monsters/'

export const fetchAllMonsters = async (): Promise<IMonster[]> => {
    const apiResponse = await axios.get(monsterApiBaseURL);
    const allMonstersResponse: IAllMonstersApiResponse = apiResponse.data;
    return allMonstersResponse.results;
}

export const fetchMonsterByName = async (name: string): Promise<IMonster> => {
    const apiResponse = await axios.get(monsterApiBaseURL + name);
    const monsterResponse: IMonster = apiResponse.data;
    return monsterResponse;
}