export interface IEncounter {
    name: string;
    id: number;
    partyMembers: IEncounterMember[]; 
    foes: IEncounterMonster[];
}

export interface IEncounterMember {
    name: string;
    level: number;
    quantity: number;
}

export interface IEncounterMonster {
    slug: string;
    name: string;
    quantity: number;
    rating: number;
}