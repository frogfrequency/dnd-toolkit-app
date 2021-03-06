import { IMonster } from "src/app/interfaces/IMonster";

export const mockMonsters: IMonster[] = [
    {
        "slug": "aatxe",
        "name": "Aatxe",
        "size": "Large",
        "type": "celestial",
        "subtype": "shapechanger",
        "group": null,
        "alignment": "lawful good",
        "armor_class": 14,
        "armor_desc": "natural armor",
        "hit_points": 105,
        "hit_dice": "10d10+50",
        "speed": {
            "walk": 50
        },
        "strength": 22,
        "dexterity": 12,
        "constitution": 20,
        "intelligence": 10,
        "wisdom": 14,
        "charisma": 14,
        "strength_save": null,
        "dexterity_save": null,
        "constitution_save": null,
        "intelligence_save": null,
        "wisdom_save": null,
        "charisma_save": null,
        "perception": null,
        "skills": {
            "athletics": 9,
            "intimidation": 5
        },
        "damage_vulnerabilities": "",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "charmed, frightened",
        "senses": "passive Perception 12",
        "languages": "understands all but can't speak",
        "challenge_rating": "5",
        "actions": [
            {
                "attack_bonus": 9,
                "damage_dice": "3d8+6",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
                "name": "Gore"
            },
            {
                "desc": "The aatxe lowers its horns and paws at the ground with its hooves. Each creature within 30 feet of the aatxe must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the aatxe's Paw the Earth for the next 24 hours.",
                "name": "Paw the Earth"
            }
        ],
        "reactions": "",
        "legendary_desc": "The aatxe can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aatxe regains spent legendary actions at the start of its turn.",
        "legendary_actions": [
            {
                "desc": "The aatxe makes a Wisdom (Perception) check.",
                "name": "Detect"
            },
            {
                "desc": "The aatxe makes one gore attack.",
                "name": "Gore (Costs 2 Actions)"
            },
            {
                "desc": "The aatxe flares crimson with celestial power, protecting those nearby. The next attack that would hit an ally within 5 feet of the aatxe hits the aatxe instead.",
                "name": "Bulwark (Costs 3 Actions)"
            }
        ],
        "special_abilities": [
            {
                "desc": "If the aatxe moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
                "name": "Charge"
            },
            {
                "desc": "The aatxe can use an action to read the surface thoughts of one creature within 30 feet. This works like the detect thoughts spell, except it can only read surface thoughts and there is no limit to the duration. It can end this effect as a bonus action or by using an action to change the target. Limited Speech (Humanoid Form Only). The aatxe can verbally communicate only simple ideas and phrases, though it can understand and follow a conversation without issue.",
                "name": "Know Thoughts"
            },
            {
                "desc": "The aatxe has advantage on saving throws against spells and other magical effects.",
                "name": "Magic Resistance"
            },
            {
                "desc": "The aatxe can use its action to polymorph into a Medium male humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                "name": "Shapechanger"
            }
        ],
        "spell_list": [],
        "img_main": null,
        "document__slug": "cc",
        "document__title": "Creature Codex OGL",
        "document__license_url": "http://open5e.com/legal"
    },
    {
        "slug": "aboleth",
        "name": "Aboleth",
        "size": "Large",
        "type": "aberration",
        "subtype": "",
        "group": null,
        "alignment": "lawful evil",
        "armor_class": 17,
        "armor_desc": "natural armor",
        "hit_points": 135,
        "hit_dice": "18d10+36",
        "speed": {
            "walk": 10,
            "swim": 40
        },
        "strength": 21,
        "dexterity": 9,
        "constitution": 15,
        "intelligence": 18,
        "wisdom": 15,
        "charisma": 18,
        "strength_save": null,
        "dexterity_save": null,
        "constitution_save": 6,
        "intelligence_save": 8,
        "wisdom_save": 6,
        "charisma_save": null,
        "perception": 10,
        "skills": {
            "history": 12,
            "perception": 10
        },
        "damage_vulnerabilities": "",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "",
        "senses": "darkvision 120 ft., passive Perception 20",
        "languages": "Deep Speech, telepathy 120 ft.",
        "challenge_rating": "10",
        "actions": [
            {
                "name": "Multiattack",
                "desc": "The aboleth makes three tentacle attacks."
            },
            {
                "name": "Tentacle",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
                "attack_bonus": 9,
                "damage_dice": "2d6",
                "damage_bonus": 5
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
                "attack_bonus": 9,
                "damage_dice": "3d6",
                "damage_bonus": 5
            },
            {
                "name": "Enslave (3/day)",
                "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
            }
        ],
        "reactions": "",
        "legendary_desc": "The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn.",
        "legendary_actions": [
            {
                "name": "Detect",
                "desc": "The aboleth makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Swipe",
                "desc": "The aboleth makes one tail attack."
            },
            {
                "name": "Psychic Drain (Costs 2 Actions)",
                "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
            }
        ],
        "special_abilities": [
            {
                "name": "Amphibious",
                "desc": "The aboleth can breathe air and water."
            },
            {
                "name": "Mucous Cloud",
                "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
            },
            {
                "name": "Probing Telepathy",
                "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
            }
        ],
        "spell_list": [],
        "img_main": "http://api.open5e.com/static/img/monsters/aboleth.png",
        "document__slug": "wotc-srd",
        "document__title": "Systems Reference Document",
        "document__license_url": "http://open5e.com/legal"
    },
    {
        "slug": "aboleth-nihilith",
        "name": "Aboleth, Nihilith",
        "size": "Large",
        "type": "undead",
        "subtype": "",
        "group": null,
        "alignment": "chaotic evil",
        "armor_class": 17,
        "armor_desc": "natural armor",
        "hit_points": 135,
        "hit_dice": "18d10+36",
        "speed": {
            "hover": true,
            "walk": 10,
            "swim": 40,
            "fly": 50
        },
        "strength": 21,
        "dexterity": 9,
        "constitution": 15,
        "intelligence": 18,
        "wisdom": 15,
        "charisma": 18,
        "strength_save": null,
        "dexterity_save": null,
        "constitution_save": 6,
        "intelligence_save": 8,
        "wisdom_save": 6,
        "charisma_save": null,
        "perception": 10,
        "skills": {
            "history": 12,
            "perception": 10
        },
        "damage_vulnerabilities": "",
        "damage_resistances": "acid, fire, lightning, thunder (only when in ethereal form); bludgeoning, piercing and slashing from nonmagical weapons",
        "damage_immunities": "cold, necrotic, poison; bludgeoning, piercing and slashing from nonmagical weapons (only when in ethereal form)",
        "condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
        "senses": "darkvision 120 ft., passive Perception 20",
        "languages": "Void Speech, telepathy 120 ft.",
        "challenge_rating": "12",
        "actions": [
            {
                "name": "Multiattack",
                "desc": "The nihileth makes three tentacle attacks or three withering touches, depending on what form it is in."
            },
            {
                "name": "Tentacle (Material Form Only)",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target creature is hit, it must make a successful DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute; during that time, it can be removed by lesser restoration or comparable magic. After 1 minute, the diseased creature's skin becomes translucent and slimy. The creature cannot regain hit points unless it is entirely underwater, and the disease can only be removed by heal or comparable magic. Unless the creature is fully submerged or frequently doused with water, it takes 6 (1d12) acid damage every 10 minutes. If a creature dies while diseased, it rises in 1d6 rounds as a nihilethic zombie. This zombie is permanently dominated by the nihileth.",
                "attack_bonus": 9,
                "damage_dice": "2d6+5"
            },
            {
                "name": "Withering Touch (Ethereal Form Only)",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 14 (3d6 + 4) necrotic damage.",
                "attack_bonus": 8,
                "damage_dice": "3d6+4"
            },
            {
                "name": "Form Swap",
                "desc": "As a bonus action, the nihileth can alter between its material and ethereal forms at will."
            },
            {
                "name": "Tail (Material Form Only)",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
                "attack_bonus": 9,
                "damage_dice": "3d6+5"
            },
            {
                "name": "Enslave (3/day)",
                "desc": "The nihileth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the nihileth until the nihileth dies or until it is on a different plane of existence from the target. The charmed target is under the nihileth's control and can't take reactions, and the nihileth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the nihileth."
            }
        ],
        "reactions": [
            {
                "name": "Void Body",
                "desc": "The nihileth can reduce the damage it takes from a single source to 0. Radiant damage can only be reduced by half."
            }
        ],
        "legendary_desc": "A nihileth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The nihileth regains spent legendary actions at the start of its turn.",
        "legendary_actions": [
            {
                "name": "Detect",
                "desc": "The aboleth makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Swipe",
                "desc": "The aboleth makes one tail attack."
            },
            {
                "name": "Psychic Drain (Costs 2 Actions)",
                "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
            }
        ],
        "special_abilities": [
            {
                "name": "Undead Fortitude",
                "desc": "If damage reduces the nihileth to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the nihileth drops to 1 hit point instead."
            },
            {
                "name": "Dual State",
                "desc": "A nihileth exists upon the Material Plane in one of two forms and can switch between them at will. In its material form, it has resistance to damage from nonmagical weapons. In its ethereal form, it is immune to damage from nonmagical weapons. The creature's ethereal form appears as a dark purple outline of its material form, with a blackish-purple haze within. A nihileth in ethereal form can move through air as though it were water, with a fly speed of 40 feet."
            },
            {
                "name": "Void Aura",
                "desc": "The undead nihileth is surrounded by a chilling cloud. A living creature that starts its turn within 5 feet of a nihileth must make a successful DC 14 Constitution saving throw or be slowed until the start of its next turn. In addition, any creature that has been diseased by a nihileth or a nihilethic zombie takes 7 (2d6) cold damage every time it starts its turn within the aura."
            },
            {
                "name": "Infecting Telepathy",
                "desc": "If a creature communicates telepathically with the nihileth, or uses a psychic attack against it, the nihileth can spread its disease to the creature. The creature must succeed on a DC 14 Wisdom save or become infected with the same disease caused by the nihileth's tentacle attack."
            },
            {
                "name": "Nihileth's Lair",
                "desc": "on initiative count 20 (losing initiative ties), the nihileth can take a lair action to create one of the magical effects as per an aboleth, or the void absorbance action listed below. The nihileth cannot use the same effect two rounds in a row.\n\n- Void Absorbance: A nihileth can pull the life force from those it has converted to nihilethic zombies to replenish its own life. This takes 18 (6d6) hit points from zombies within 30 feet of the nihileth, spread evenly between the zombies, and healing the nihileth. If a zombie reaches 0 hit points from this action, it perishes with no Undead Fortitude saving throw."
            },
            {
                "name": "Regional Effects",
                "desc": "the regional effects of a nihileth's lair are the same as that of an aboleth, except as following.\n\n- Water sources within 1 mile of a nihileth's lair are not only supernaturally fouled but can spread the disease of the nihileth. A creature who drinks from such water must make a successful DC 14 Constitution check or become infected."
            }
        ],
        "spell_list": [],
        "img_main": null,
        "document__slug": "tob",
        "document__title": "Tome of Beasts OGL",
        "document__license_url": "http://open5e.com/legal"
    },
    {
        "slug": "skeleton",
        "name": "Skeleton",
        "size": "Medium",
        "type": "undead",
        "subtype": "",
        "group": "Skeletons",
        "alignment": "lawful evil",
        "armor_class": 13,
        "armor_desc": "armor scraps",
        "hit_points": 13,
        "hit_dice": "2d8+4",
        "speed": {
            "walk": 30
        },
        "strength": 10,
        "dexterity": 14,
        "constitution": 15,
        "intelligence": 6,
        "wisdom": 8,
        "charisma": 5,
        "strength_save": null,
        "dexterity_save": null,
        "constitution_save": null,
        "intelligence_save": null,
        "wisdom_save": null,
        "charisma_save": null,
        "perception": null,
        "skills": {},
        "damage_vulnerabilities": "bludgeoning",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "poisoned",
        "senses": "darkvision 60 ft., passive Perception 9",
        "languages": "understands all languages it spoke in life but can't speak",
        "challenge_rating": "1/4",
        "actions": [
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                "attack_bonus": 4,
                "damage_dice": "1d6",
                "damage_bonus": 2
            },
            {
                "name": "Shortbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                "attack_bonus": 4,
                "damage_dice": "1d6",
                "damage_bonus": 2
            }
        ],
        "reactions": "",
        "legendary_desc": "",
        "legendary_actions": "",
        "special_abilities": "",
        "spell_list": [],
        "img_main": null,
        "document__slug": "wotc-srd",
        "document__title": "Systems Reference Document",
        "document__license_url": "http://open5e.com/legal"
    },
    {
        "slug": "bandit",
        "name": "Bandit",
        "size": "Medium",
        "type": "humanoid",
        "subtype": "any race",
        "group": null,
        "alignment": "any non-lawful alignment",
        "armor_class": 12,
        "armor_desc": "leather armor",
        "hit_points": 11,
        "hit_dice": "2d8",
        "speed": {
            "walk": 30
        },
        "strength": 11,
        "dexterity": 12,
        "constitution": 12,
        "intelligence": 10,
        "wisdom": 10,
        "charisma": 10,
        "strength_save": null,
        "dexterity_save": null,
        "constitution_save": null,
        "intelligence_save": null,
        "wisdom_save": null,
        "charisma_save": null,
        "perception": null,
        "skills": {},
        "damage_vulnerabilities": "",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "",
        "senses": "passive Perception 10",
        "languages": "any one language (usually Common)",
        "challenge_rating": "1/8",
        "actions": [
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
                "attack_bonus": 3,
                "damage_dice": "1d6",
                "damage_bonus": 1
            },
            {
                "name": "Light Crossbow",
                "desc": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
                "attack_bonus": 3,
                "damage_dice": "1d8",
                "damage_bonus": 1
            }
        ],
        "reactions": "",
        "legendary_desc": "",
        "legendary_actions": "",
        "special_abilities": "",
        "spell_list": [],
        "img_main": null,
        "document__slug": "wotc-srd",
        "document__title": "Systems Reference Document",
        "document__license_url": "http://open5e.com/legal"
    },
    {
        "slug": "my-mock-monster",
        "name": "MyMockMonster",
        "size": "Large",
        "type": "undead",
        "subtype": "",
        "group": null,
        "alignment": "chaotic evil",
        "armor_class": 17,
        "armor_desc": "natural armor",
        "hit_points": 135,
        "hit_dice": "18d10+36",
        "speed": {
            "hover": true,
            "walk": 10,
            "swim": 40,
            "fly": 50
        },
        "strength": 21,
        "dexterity": 9,
        "constitution": 15,
        "intelligence": 18,
        "wisdom": 15,
        "charisma": 18,
        "strength_save": null,
        "dexterity_save": null,
        "constitution_save": 6,
        "intelligence_save": 8,
        "wisdom_save": 6,
        "charisma_save": null,
        "perception": 10,
        "skills": {
            "history": 12,
            "perception": 10
        },
        "damage_vulnerabilities": "",
        "damage_resistances": "acid, fire, lightning, thunder (only when in ethereal form); bludgeoning, piercing and slashing from nonmagical weapons",
        "damage_immunities": "cold, necrotic, poison; bludgeoning, piercing and slashing from nonmagical weapons (only when in ethereal form)",
        "condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
        "senses": "darkvision 120 ft., passive Perception 20",
        "languages": "Void Speech, telepathy 120 ft.",
        "challenge_rating": "12",
        "actions": [
            {
                "name": "Multiattack",
                "desc": "The nihileth makes three tentacle attacks or three withering touches, depending on what form it is in."
            },
            {
                "name": "Tentacle (Material Form Only)",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target creature is hit, it must make a successful DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute; during that time, it can be removed by lesser restoration or comparable magic. After 1 minute, the diseased creature's skin becomes translucent and slimy. The creature cannot regain hit points unless it is entirely underwater, and the disease can only be removed by heal or comparable magic. Unless the creature is fully submerged or frequently doused with water, it takes 6 (1d12) acid damage every 10 minutes. If a creature dies while diseased, it rises in 1d6 rounds as a nihilethic zombie. This zombie is permanently dominated by the nihileth.",
                "attack_bonus": 9,
                "damage_dice": "2d6+5"
            },
            {
                "name": "Withering Touch (Ethereal Form Only)",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 14 (3d6 + 4) necrotic damage.",
                "attack_bonus": 8,
                "damage_dice": "3d6+4"
            },
            {
                "name": "Form Swap",
                "desc": "As a bonus action, the nihileth can alter between its material and ethereal forms at will."
            },
            {
                "name": "Tail (Material Form Only)",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
                "attack_bonus": 9,
                "damage_dice": "3d6+5"
            },
            {
                "name": "Enslave (3/day)",
                "desc": "The nihileth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the nihileth until the nihileth dies or until it is on a different plane of existence from the target. The charmed target is under the nihileth's control and can't take reactions, and the nihileth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the nihileth."
            }
        ],
        "reactions": [
            {
                "name": "Void Body",
                "desc": "The nihileth can reduce the damage it takes from a single source to 0. Radiant damage can only be reduced by half."
            }
        ],
        "legendary_desc": "A nihileth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The nihileth regains spent legendary actions at the start of its turn.",
        "legendary_actions": [
            {
                "name": "Detect",
                "desc": "The aboleth makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Swipe",
                "desc": "The aboleth makes one tail attack."
            },
            {
                "name": "Psychic Drain (Costs 2 Actions)",
                "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
            }
        ],
        "special_abilities": "",
        // "special_abilities": [
        //     {
        //         "name": "Undead Fortitude",
        //         "desc": "If damage reduces the nihileth to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the nihileth drops to 1 hit point instead."
        //     },
        //     {
        //         "name": "Dual State",
        //         "desc": "A nihileth exists upon the Material Plane in one of two forms and can switch between them at will. In its material form, it has resistance to damage from nonmagical weapons. In its ethereal form, it is immune to damage from nonmagical weapons. The creature's ethereal form appears as a dark purple outline of its material form, with a blackish-purple haze within. A nihileth in ethereal form can move through air as though it were water, with a fly speed of 40 feet."
        //     },
        //     {
        //         "name": "Void Aura",
        //         "desc": "The undead nihileth is surrounded by a chilling cloud. A living creature that starts its turn within 5 feet of a nihileth must make a successful DC 14 Constitution saving throw or be slowed until the start of its next turn. In addition, any creature that has been diseased by a nihileth or a nihilethic zombie takes 7 (2d6) cold damage every time it starts its turn within the aura."
        //     },
        //     {
        //         "name": "Infecting Telepathy",
        //         "desc": "If a creature communicates telepathically with the nihileth, or uses a psychic attack against it, the nihileth can spread its disease to the creature. The creature must succeed on a DC 14 Wisdom save or become infected with the same disease caused by the nihileth's tentacle attack."
        //     },
        //     {
        //         "name": "Nihileth's Lair",
        //         "desc": "on initiative count 20 (losing initiative ties), the nihileth can take a lair action to create one of the magical effects as per an aboleth, or the void absorbance action listed below. The nihileth cannot use the same effect two rounds in a row.\n\n- Void Absorbance: A nihileth can pull the life force from those it has converted to nihilethic zombies to replenish its own life. This takes 18 (6d6) hit points from zombies within 30 feet of the nihileth, spread evenly between the zombies, and healing the nihileth. If a zombie reaches 0 hit points from this action, it perishes with no Undead Fortitude saving throw."
        //     },
        //     {
        //         "name": "Regional Effects",
        //         "desc": "the regional effects of a nihileth's lair are the same as that of an aboleth, except as following.\n\n- Water sources within 1 mile of a nihileth's lair are not only supernaturally fouled but can spread the disease of the nihileth. A creature who drinks from such water must make a successful DC 14 Constitution check or become infected."
        //     }
        // ],
        "spell_list": [],
        "img_main": null,
        "document__slug": "tob",
        "document__title": "Tome of Beasts OGL",
        "document__license_url": "http://open5e.com/legal"
    },
]