import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';
import { INameSearchParams } from 'src/app/interfaces/INameSearchParams';

import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-page-find-monster',
  templateUrl: './page-find-monster.component.html',
  styleUrls: ['./page-find-monster.component.css']
})
export class PageFindMonsterComponent implements OnInit {

  @ Input() allMonsters: IMonster[] = [];

  searchEntries: string[] = [];
  searchEntriesLUT: any = {};

  searchFieldParams: INameSearchParams = {
    searchFieldMainTitle: "search Monsters by Name",
    searchInputFieldTitle: "enter monster name",
    placeholder: "e.g. skeleton",
    value: "herald-of-blood",
  }

  monsterToSearch: string = '';

  // searchResult: IMonster | undefined = {
  //   "slug": "skeleton",
  //   "name": "Skeleton",
  //   "size": "Medium",
  //   "type": "undead",
  //   "subtype": "",
  //   "group": "Skeletons",
  //   "alignment": "lawful evil",
  //   "armor_class": 13,
  //   "armor_desc": "armor scraps",
  //   "hit_points": 13,
  //   "hit_dice": "2d8+4",
  //   "speed": {
  //     "walk": 30
  //   },
  //   "strength": 10,
  //   "dexterity": 14,
  //   "constitution": 15,
  //   "intelligence": 6,
  //   "wisdom": 8,
  //   "charisma": 5,
  //   "strength_save": null,
  //   "dexterity_save": null,
  //   "constitution_save": null,
  //   "intelligence_save": null,
  //   "wisdom_save": null,
  //   "charisma_save": null,
  //   "perception": null,
  //   "skills": {},
  //   "damage_vulnerabilities": "bludgeoning",
  //   "damage_resistances": "",
  //   "damage_immunities": "",
  //   "condition_immunities": "poisoned",
  //   "senses": "darkvision 60 ft., passive Perception 9",
  //   "languages": "understands all languages it spoke in life but can't speak",
  //   "challenge_rating": "1/4",
  //   "actions": [
  //     {
  //       "name": "Shortsword",
  //       "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
  //       "attack_bonus": 4,
  //       "damage_dice": "1d6",
  //       "damage_bonus": 2
  //     },
  //     {
  //       "name": "Shortbow",
  //       "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
  //       "attack_bonus": 4,
  //       "damage_dice": "1d6",
  //       "damage_bonus": 2
  //     }
  //   ],
  //   "reactions": "",
  //   "legendary_desc": "",
  //   "legendary_actions": "",
  //   "special_abilities": "",
  //   "spell_list": [],
  //   "img_main": null,
  //   "document__slug": "wotc-srd",
  //   "document__title": "Systems Reference Document",
  //   "document__license_url": "http://open5e.com/legal"
  // } // is | undefined smart?

  searchResult: IMonster | undefined;

  errorCode: number | boolean = false;

  constructor(private monsterService: MonsterService) { }


  ngOnInit(): void {
    // this.startSearch('skeleton'); // remove this.. this is only to make developing the card easier!
    this.extractAndSetSearchEntries();
  }

  extractAndSetSearchEntries():void {
    console.log('this function is called')
    this.allMonsters.forEach( monster => {
      this.searchEntries.push(monster.name)
      this.searchEntriesLUT[`${monster.name}`] = `${monster.slug}`;
    })
  }

  searchFieldSearchFunction = (toSearch: string): void => {
    this.startSearch(toSearch);
  }

  startSearch(searchString: string): void {
    searchString = searchString.trim(); 

    if (searchString.length) {
      this.monsterService.getMonsterByName(this.searchEntriesLUT[searchString]).subscribe((monster) => {
        console.log(monster);
        if (typeof(monster) === 'number') {
          this.errorCode = monster;
        } else {
          this.errorCode = false;
          this.searchResult = monster
        }
      });
    } else {
      alert('Input field must not be empty!')
    }
  }

  
}
