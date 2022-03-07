import axios from 'axios';
import { type } from 'os';
import { IAllMonstersApiResponse, IMonster } from '../interfaces/models/IMonster'

const monsterApiBaseURL = 'https://api.open5e.com/monsters/'

// this fetchAllMonstersFunction was replaced by a better one. it is stored for possible later partial reuse 
// export const fetchAllMonsters = async (): Promise<IMonster[]> => {
//     let allMonsters: IMonster[] = []; // the api does only return the first page (50 monsters) and a next url. we have to call all the pages and collect all the monsters
//     let apiResponse = await axios.get(monsterApiBaseURL);
//     let allMonstersResponse: IAllMonstersApiResponse = apiResponse.data;
//     let next = allMonstersResponse.next;

//     allMonstersResponse.results.forEach(monster => {
//         allMonsters.push(monster)
//     })

//     while (next) {
//         apiResponse = await axios.get(next);
//         allMonstersResponse = apiResponse.data;
//         allMonstersResponse.results.forEach(monster => {
//             allMonsters.push(monster)
//         })
//         next = allMonstersResponse.next
//     }

//     return allMonsters;
// }


export const fetchAllMonsters = async (): Promise<IMonster[]> => {
    let apiResponse = await axios.get(monsterApiBaseURL+ '?limit=2000');
    // let allMonstersResponse: IAllMonstersApiResponse = apiResponse.data;
    // let next = allMonstersResponse.next;
    let allMonsters: IMonster[] = apiResponse.data.results;
    return allMonsters;
}

export const fetchMonsterByName = async (name: string): Promise<IMonster | number> => {
    
    const apiResponse = await axios.get(monsterApiBaseURL + name)
        .catch(error => { return error.response.status });
    
    if (typeof(apiResponse) === 'number') {
        return apiResponse
    } else {
        const monsterResponse: IMonster = apiResponse.data;
        return monsterResponse;
    }
}

export const fetchAllMonstersPageOne = async (): Promise<IMonster[]> => {
    const apiResponse = await axios.get(monsterApiBaseURL);
    const allMonstersResponse: IAllMonstersApiResponse = apiResponse.data;
    return allMonstersResponse.results;
}

export const fetchAllMonstersWithSpecificFilter = async (filterProperty: string, filterValue: string): Promise<IMonster[]> => {
    const allMonsters: IMonster[] = await fetchAllMonsters();
    let allMonstersWithFilterApplied: IMonster[] = [];
    allMonsters.forEach(monster => {
        let propertyType: string = typeof (monster[filterProperty as keyof IMonster]);

        if (propertyType === 'string') {
            if (monster[filterProperty as keyof IMonster] === filterValue) {
                allMonstersWithFilterApplied.push(monster);
            }
        } else {
            if (JSON.stringify(monster[filterProperty as keyof IMonster]) === filterValue) {
                allMonstersWithFilterApplied.push(monster);
            }
        }
    })
    return allMonstersWithFilterApplied
}
