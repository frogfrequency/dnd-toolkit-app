export interface IEncounter {
    name: string;
    id: number;
    imageURL: string;
    partyMembers: IEncounterMember[]; 
    monsters: IEncounterMonster[];
}

export interface IEncounterMember {
    level: number;
    quantity: number;
}

export interface IEncounterMonster {
    slug: string;
    name: string;
    quantity: number;
    rating: string;
}