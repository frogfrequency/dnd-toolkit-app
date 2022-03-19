import { IEncounter, IEncounterMember, IEncounterMonster } from "src/app/interfaces/IEncounter";
import { experienceTable } from "./challengeRatingXPTable";
import { xpThresholdByCharacterLevelTable } from "./xpThresholdsByCharacterLevelTable";



export function giveMonsterXp(monsters: IEncounterMonster[]): number {
    let xpSum = 0;
    monsters.forEach(monster => {
        let monsterRating = monster.rating;
        xpSum += experienceTable[monsterRating] * monster.quantity;
    })
    return xpSum
}

export function giveMonsterDifficultyMultiplier(monsterQuantity: number, adventurerQuantity: number): number {

    let difficultyClass: number;

    if (monsterQuantity <= 1) {
        difficultyClass = 1;
    } else if (monsterQuantity === 2) {
        difficultyClass = 2;
    } else if (monsterQuantity <= 6) {
        difficultyClass = 3;
    } else if (monsterQuantity <= 10) {
        difficultyClass = 4;
    } else if (monsterQuantity <= 14) {
        difficultyClass = 5;
    } else {
        difficultyClass = 6;
    }

    if (adventurerQuantity < 3) {
        difficultyClass += 1;
    } else if (5 < adventurerQuantity) {
        difficultyClass -= 1;
    }

    switch (difficultyClass) {
        case 0:
            return 0.5
            break;
        case 1:
            return 1;
            break;
        case 2:
            return 1.5;
            break;
        case 3:
            return 2;
            break;
        case 4:
            return 2.5;
            break;
        case 5:
            return 3;
            break;
        case 6:
            return 4;
            break;
        case 7:
            return 5;
            break;
        default:
            return 100;
            break;
    }
}

export function giveXpThresholds(partyMembers: IEncounterMember[]): number[] {
    let thresholds: number[] = [0,0,0,0];
    partyMembers.forEach(adventurer => {
        const adventurerThresholds = xpThresholdByCharacterLevelTable[adventurer.level-1]
        for (let i=0; i<4; i++) {
            thresholds[i] += adventurerThresholds[i]*adventurer.quantity
        }
    })
    return thresholds
}

export function giveEncounterDifficultyCategory(adjustedMonsterXp: number, xpThresholds: number[]): string {
    if (adjustedMonsterXp < xpThresholds[1]){
        return "Easy"
    } else if (adjustedMonsterXp < xpThresholds[2]) {
        return "Medium"
    } else if (adjustedMonsterXp < xpThresholds[3]) {
        return "Hard"
    } else {
        return "Deadly"
    }
}


