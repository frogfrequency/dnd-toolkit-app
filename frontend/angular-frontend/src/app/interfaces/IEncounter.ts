export interface IEncounter {
    name: string,
    id: number,
    imageURL: string,
    partyMembers: IEncounterMember[], 
    monsters: IEncounterMonster[],
    monsterXp?: number,
    monsterDifficultyMultiplier?: number,
    monsterXpAdjusted?: number,
    xpThresholds?: number[],
    encounterDifficultyCategory?: string,
}

export interface IEncounterMember {
    level: number,
    quantity: number,
}

export interface IEncounterMonster {
    slug: string,
    name: string,
    quantity: number,
    rating: string,
}