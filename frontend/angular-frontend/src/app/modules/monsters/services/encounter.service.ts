import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


import { IEncounter } from 'src/app/interfaces/IEncounter';
import { IMonster } from 'src/app/interfaces/IMonster';
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

  addNewEncounter(encounterName: string): void {
    // if (this.encounters.some(encounter => encounter.name === encounterName)) {
    //   alert("asdf")
    // } else { // if its not already included in favorites
    this.encounters.push({
      name: encounterName,
      id: this.genId(this.encounters),
      imageURL: '',
      partyMembers: [],
      monsters: []
    });

    this.encountersSubject.next(this.encounters);

    // }
  }

  genId(encounters: IEncounter[]): number {
    return encounters.length > 0 ? Math.max(...encounters.map(hero => hero.id)) + 1 : 11;
  }

  deleteEncounter(id: number): void {
    this.encounters = this.encounters.filter(encounter => encounter.id !== id);
    this.encountersSubject.next(this.encounters);
  }

  addMemberToEncounter(encounterId: number, level: number) {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);

    this.encounters[encounterIdx].partyMembers.push(
      {
        level: level,
        quantity: 1
      }
    )
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
  }

  deleteMember(encounterId: number, level: number): void {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
    this.encounters[encounterIdx].partyMembers = this.encounters[encounterIdx].partyMembers.filter(member => member.level != level);
    this.encountersSubject.next(this.encounters);
  }


  // NOT FINISHED...
  addMonsterToEncounter(encounterId: number, monster: IMonster) {
    if (typeof(encounterId) == "string") {
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
  }

  deleteMonster(encounterId: number, slug: string) {
    let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
    this.encounters[encounterIdx].monsters = this.encounters[encounterIdx].monsters.filter(monster => monster.slug != slug);
  }

}
