export interface IMonster {
    slug: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    group: string | null;
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
    reactions: string | IReactions[];
    legendary_desc: string;
    legendary_actions: string | ILegendaryAction[];
    special_abilities: string | ISpecialAbility[];
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
    athletics?: string |number;
    acrobatics?: string |number;
    stealth?: string |number;
    arcana?: string |number;
    history?: string |number;
    investigation?: string |number;
    nature?: string |number;
    religion?: string |number;
    insight?: string |number;
    medicine?: string |number;
    perception?: string |number;
    survival?: string |number;
    deception?: string |number;
    intimidation?: string |number;
    performance?: string |number;
    persuasion?: string |number;
}

export interface ISpeed {
    hover?: boolean; 
    walk?: number;
    burrow?: number;
    climb?: number;
    fly?: number;
    swim?: number;
}

export interface IReactions {
    name: string;
    desc: string;
}

export interface ILegendaryAction {
    name: string;
    desc: string;
}

export interface ISpecialAbility {
    name: string;
    desc: string;
}

export interface IAllMonstersApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IMonster[];
}
