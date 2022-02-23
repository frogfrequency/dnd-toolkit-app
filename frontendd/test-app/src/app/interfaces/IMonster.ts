export interface IMonster {
    slug: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    group: string;
    alignment: string;
    armor_class: number;
    armor_desc: string;
    hit_points: number;
    hit_dice: string;
    speed: ISpeed;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    strength_save: number | null;
    dexterity_save: number | null;
    constitution_save: number | null;
    intelligence_save: number | null;
    wisdom_save: number | null;
    charisma_save: number | null;
    perception: number | null;
    skills: ISkills;
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    challenge_rating: string;
    actions: IAction[];
    reactions: string;
    legendary_desc: string;
    legendary_actions: string | ILegendaryAction;
    special_abilities: string;
    spell_list: string[];
    img_main: string | null;
    document__slug: string;
    document__title: string;
    document__license_url: string;
}

export interface IAction {
    name?: string;
    desc?: string;
    attack_bonus?: number;
    damage_dice?: string;
    damage_bonus?: number;
}

// removed sleight of hand & animal handling (because no monster has these)
export interface ISkills {
    athletics?: string;
    acrobatics?: string;
    stealth?: string;
    arcana?: string;
    history?: string;
    investigation?: string;
    nature?: string;
    religion?: string;
    insight?: string;
    medicine?: string;
    perception?: string;
    survival?: string;
    deception?: string;
    intimidation?: string;
    performance?: string;
    persuasion?: string;
}

export interface ISpeed {
    walk?: number;
    burrow?: number;
    climb?: number;
    fly?: number;
    swim?: number;
}

export interface ILegendaryAction {
    name: string;
    desc: string;
}

export interface IAllMonstersApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IMonster[];
}
