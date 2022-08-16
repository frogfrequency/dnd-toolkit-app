import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IEncounter } from 'src/app/interfaces/IEncounter';
import { EncounterService } from '../services/encounter.service';
import { AddNewEncounterDialogComponent } from './add-new-encounter-dialog/add-new-encounter-dialog.component';

@Component({
  selector: 'app-encounter-creator',
  templateUrl: './encounter-creator.component.html',
  styleUrls: ['./encounter-creator.component.css']
})
export class EncounterCreatorComponent implements OnInit {

  encounters: IEncounter[] = [];

  selectedEncounterID: number = 11; // 0 -> false -> no encounter selected

  addNewEncounterPopupDisplay = false;

  constructor(private encounterService: EncounterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.encounterService.encountersSubject.subscribe(encounters => {
      this.encounters = encounters;
    });
  }

  setSelectedEncounterID(id: number): void {
    this.selectedEncounterID = id;
  }

  removeEncounter(id: number): void {
    this.encounterService.deleteEncounter(id);
  }

  showOverview():void {
    this.selectedEncounterID = 0;
  }

  openAddNewEncounterDialog(): void {
    let dialogRef = this.dialog.open(AddNewEncounterDialogComponent, {data: {name: "mäsib"}});
    dialogRef.afterClosed().subscribe( name => {
      if (name) {
        this.encounterService.addNewEncounter(name);
      }
    })
  }

}
