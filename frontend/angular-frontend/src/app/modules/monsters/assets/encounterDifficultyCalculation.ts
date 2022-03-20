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

export function giveMonsterDifficultyMultiplier(monsters: IEncounterMonster[], partyMembers: IEncounterMember[] ): number {
    let monsterQuantity: number = 0;
    let partyMemberQuantity: number = 0;

    monsters.forEach(monster => monsterQuantity += monster.quantity);
    partyMembers.forEach(member => partyMemberQuantity += member.quantity);

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

    if (partyMemberQuantity < 3) {
        difficultyClass += 1;
    } else if (5 < partyMemberQuantity) {
        difficultyClass -= 1;
    }

    switch (difficultyClass) {
        case 0:
            console.log(`returning 0.5`)
            return 0.5;
            break;
        case 1:
            console.log(`returning 1`)
            return 1;
            break;
        case 2:
            console.log(`returning 1.5`)
            return 1.5;
            break;
        case 3:
            console.log(`returning 2`)
            return 2;
            break;
        case 4:
            console.log(`returning 2.5`)
            return 2.5;
            break;
        case 5:
            console.log(`returning 3`)
            return 3;
            break;
        case 6:
            console.log(`returning 4`)
            return 4;
            break;
        case 7:
            console.log(`returning 5`)
            return 5;
            break;
        default:
            console.log(`returning 100`)
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

export function givePercentage(adjustedMonsterXp: number, xpThresholds: number[]): number {
    return Math.floor(100/xpThresholds[3]*adjustedMonsterXp);
}

export function giveEncounterDifficultyCategory(adjustedMonsterXp: number, xpThresholds: number[]): string {
    if (adjustedMonsterXp < xpThresholds[0]) {
        return "Trivial"
    } else if (adjustedMonsterXp < xpThresholds[1]){
        return "Easy"
    } else if (adjustedMonsterXp < xpThresholds[2]) {
        return "Medium"
    } else if (adjustedMonsterXp < xpThresholds[3]) {
        return "Hard"
    } else {
        return "Deadly"
    }
}

export function giveDifficultyClassColorClass(encounterDifficultyCategory: string): string {
    switch(encounterDifficultyCategory) {
        case "Trivial":
            return "white-spinner"
        case "Easy":
            return "green-spinner"
        case "Medium":
            return "orange-spinner"
        case "Hard":
            return "orangered-spinner"
        case "Deadly":
            return "red-spinner"
    }
    return ""
}


