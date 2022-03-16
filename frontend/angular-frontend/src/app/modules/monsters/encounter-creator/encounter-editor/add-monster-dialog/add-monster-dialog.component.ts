import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMonster } from 'src/app/interfaces/IMonster';
import { FavoritesService } from '../../../services/favorites.service';
import { MonsterService } from '../../../services/monster.service';

@Component({
  selector: 'app-add-monster-dialog',
  templateUrl: './add-monster-dialog.component.html',
  styleUrls: ['./add-monster-dialog.component.css']
})
export class AddMonsterDialogComponent implements OnInit {

  // GENERAL

  allMonsters: IMonster[] = [];
  monsterNamesAlreadyInEncounter: string[] = [];

  // ADD FROM FAVORITES

  favoritedMonsters: IMonster[] = [];


  // ADD FROM NAME SEARCH
  allMonsterNameCrPair: string[][] = [];
  matchingSearchEntries: string[][] = [];
  clickedSearchEntry: string = '';
  currentSearchStringValidity: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private favoritesService: FavoritesService,
    private monsterService: MonsterService,
  ) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
      this.data.encounter.monsters.forEach((monster: any) => {
        this.monsterNamesAlreadyInEncounter.push(monster.name)
      })
    });


    this.monsterService.allMonstersSubject.subscribe(allMonsters => {
      this.allMonsters = allMonsters;
      this.allMonsterNameCrPair = [];
      this.allMonsters.forEach(monster => {
        this.allMonsterNameCrPair.push([monster.name, monster.challenge_rating]);
      });
    });

  }

  inputChanged(newString: string): void {

    if (2 <= newString.length) {
      console.log(`input changed`)
      this.setNameSearchStringValidity(newString);
      let matching: string[][] = [];
      newString = newString.toLowerCase();
      this.allMonsterNameCrPair.forEach(element => {
        if (element[0].toLowerCase().includes(newString)) {
          matching.push(element);
        }
      });
      this.matchingSearchEntries = [...matching] // JSON THINGY DO IT HERE
    } else {
      this.matchingSearchEntries = [];
      this.setNameSearchStringValidity(newString);
    }
  }

  setClickedSearchEntry(clickedSearchEntry: string): void {
    this.clickedSearchEntry = clickedSearchEntry;
    this.setNameSearchStringValidity(clickedSearchEntry);
    this.matchingSearchEntries = [];
  }

  setNameSearchStringValidity(currentValue: string): void {
    if (!this.data.encounter.monsters.find((element: any) => element.name === currentValue) && this.allMonsterNameCrPair.find(element => element[0] === currentValue)) {
      this.currentSearchStringValidity = true;
    } else {
      this.currentSearchStringValidity = false;
    }
  }

  // giveMonsterChallengeRating(name: string): string {
  //   let output = this.allMonsters.find(element => element.name === name);
  //   if (output) {
  //     return output.challenge_rating
  //   } else {
  //     return ""
  //   }
  // }

  // setSelectedMonster(slug: string): void {
  //   // if (this.favoritedMonsters) {
  //     console.log(`setSelectedMonster is called with: ${slug}`)
  //     this.currentlyFavoritedMonster = this.favoritedMonsters.find(element => element.slug === slug)
  //   // }
  // }
}
