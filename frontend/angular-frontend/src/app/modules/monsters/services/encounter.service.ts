import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


import { IEncounter } from 'src/app/interfaces/IEncounter';
import { IMonster } from 'src/app/interfaces/IMonster';
import { giveDifficultyClassColorClass, giveEncounterDifficultyCategory, giveMonsterDifficultyMultiplier, giveMonsterXp, givePercentage, giveXpThresholds } from '../assets/encounterDifficultyCalculation';
import { mockEncounters } from '../mockEncounters';

@Injectable({
  providedIn: 'root'
})

export class EncounterService {

  encounters: IEncounter[] = mockEncounters;
  encountersSubject!: BehaviorSubject<IEncounter[]>;

  constructor() {
    this.encountersSubject = new BehaviorSubject(this.encounters);
  }

  // GENERAL ENCOUNTER METHODS

  addNewEncounter(encounterName: string): void {
    this.encounters.push({
      name: encounterName,
      id: this.genId(this.encounters),
      imageURL: '',
      partyMembers: [],
      monsters: [],
      monsterXp: 0,
      monsterDifficultyMultiplier: 0,
      monsterXpAdjusted: 0,
      xpThresholds: [],
      percentage: 0,
      encounterDifficultyCategory: "",
      difficultyClassColorClass: ""
    });

    // this.encountersSubject.next(this.encounters);

    // }
  }

  genId(encounters: IEncounter[]): number {
    return encounters.length > 0 ? Math.max(...encounters.map(hero => hero.id)) + 1 : 11;
  }

  deleteEncounter(id: number): void {
    this.encounters = this.encounters.filter(encounter => encounter.id !== id);
    this.encountersSubject.next(this.encounters);
  }

  refreshEncounterStats(id: number): void {
    console.log(`refreshing encounter with ID: ${id}`);
    let copy = JSON.parse(JSON.stringify(this.encounters.find((encounter: any) => encounter.id === id)));
    // let copy = this.encounters.find((encounter: any) => encounter.id === id);

    if (copy) {
      copy.monsterXp = giveMonsterXp(copy.monsters);
      copy.monsterDifficultyMultiplier = giveMonsterDifficultyMultiplier(copy.monsters, copy.partyMembers);
      copy.monsterXpAdjusted = copy.monsterXp * copy.monsterDifficultyMultiplier;
      copy.xpThresholds = giveXpThresholds(copy.partyMembers);
      copy.percentage = givePercentage(copy.monsterXpAdjusted, copy.xpThresholds);
      copy.encounterDifficultyCategory = giveEncounterDifficultyCategory(copy.monsterXpAdjusted, copy.xpThresholds);
      copy.difficultyClassColorClass = giveDifficultyClassColorClass(copy.encounterDifficultyCategory);
      let encounterIdxInArr = this.encounters.findIndex(element => element.id === id);
      this.encounters[encounterIdxInArr] = copy;
    }
    this.encountersSubject.next(this.encounters);
  }


  // MEMBER METHODS

  addMemberToEncounter(encounterId: number, level: number) {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);

    this.encounters[encounterIdx].partyMembers.push(
      {
        level: level,
        quantity: 1
      }
    )
    this.refreshEncounterStats(encounterId);
    this.encountersSubject.next(this.encounters);
  }

  adjustMemberQuantity(encounterId: number, level: number, operation: string): void {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
    let memberIdx = this.encounters[encounterIdx].partyMembers.findIndex(member => member.level === level);
    if (operation == 'increment') {
      this.encounters[encounterIdx].partyMembers[memberIdx].quantity = this.encounters[encounterIdx].partyMembers[memberIdx].quantity + 1;
    } else if (operation == 'decrement') {
      if (1 < this.encounters[encounterIdx].partyMembers[memberIdx].quantity) {
        this.encounters[encounterIdx].partyMembers[memberIdx].quantity = this.encounters[encounterIdx].partyMembers[memberIdx].quantity - 1;
      }
    }
    this.refreshEncounterStats(encounterId);
    // maybe .next needed here and everywhere else? dunno
  }

  deleteMember(encounterId: number, level: number): void {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
    this.encounters[encounterIdx].partyMembers = this.encounters[encounterIdx].partyMembers.filter(member => member.level != level);
    this.refreshEncounterStats(encounterId);
    this.encountersSubject.next(this.encounters);
  }

  // MONSTER METHODS


  addMonsterToEncounter(encounterId: number, monster: IMonster) {
    if (typeof (encounterId) == "string") {
      encounterId = parseInt(encounterId);
    }
    if (encounterId) { // catching the case when the dialog is closed without selection.. it then sends undefined as encounterId which is caught here in this if block

      let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
      // console.log(`addMonsterToEncounter called with encounterId, monster ${encounterId}, ${monster}`)
      console.log(`HERERE`)
      console.log(`${encounterIdx}`)
      this.encounters[encounterIdx].monsters.push(
        {
          slug: monster.slug,
          name: monster.name,
          quantity: 1,
          rating: monster.challenge_rating
        }
      )
      this.refreshEncounterStats(encounterId);
    }
  }

  adjustMonsterQuantity(encounterId: number, slug: string, operation: string) {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
    let monsterIdx = this.encounters[encounterIdx].monsters.findIndex(monster => monster.slug === slug);
    if (operation === 'increment') {
      this.encounters[encounterIdx].monsters[monsterIdx].quantity = this.encounters[encounterIdx].monsters[monsterIdx].quantity + 1;
    } else if (operation == 'decrement') {
      if (1 < this.encounters[encounterIdx].monsters[monsterIdx].quantity) {
        this.encounters[encounterIdx].monsters[monsterIdx].quantity = this.encounters[encounterIdx].monsters[monsterIdx].quantity - 1
      }
    }
    this.refreshEncounterStats(encounterId);
  }

  deleteMonster(encounterId: number, slug: string) {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
    this.encounters[encounterIdx].monsters = this.encounters[encounterIdx].monsters.filter(monster => monster.slug != slug);
    this.refreshEncounterStats(encounterId);
  }


}
