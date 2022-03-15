import { Component, OnInit, Inject, Pipe, PipeTransform } from '@angular/core';


import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEncounter } from 'src/app/interfaces/IEncounter';
import { EncounterService } from '../../services/encounter.service';

@Component({
  selector: 'app-add-this-monster-to-encounter-dialog',
  templateUrl: './add-this-monster-to-encounter-dialog.component.html',
  styleUrls: ['./add-this-monster-to-encounter-dialog.component.css'],
})
export class AddThisMonsterToEncounterDialogComponent implements OnInit {

  encounters: IEncounter[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private encounterService: EncounterService) { }

  ngOnInit(): void {
    this.encounterService.encountersSubject.subscribe(encounters => {
      this.encounters = encounters;
    })
  }

  monsterIsAlreadyInEncounter(encounter: any, monsterName: string):boolean {
    console.log(encounter.name);
    return true
  }

}
