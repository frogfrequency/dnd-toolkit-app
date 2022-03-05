import { Component, OnInit } from '@angular/core';
import { IEncounter } from 'src/app/interfaces/IEncounter';
import { EncounterService } from '../services/encounter.service';

@Component({
  selector: 'app-encounter-creator',
  templateUrl: './encounter-creator.component.html',
  styleUrls: ['./encounter-creator.component.css']
})
export class EncounterCreatorComponent implements OnInit {

  encounters: IEncounter[] = [];

  selectedEncounterID: number = 12; // 0 -> false -> no encounter selected

  addNewEncounterPopupDisplay = false;

  constructor(private encounterService: EncounterService) { }

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

  closeAddNewEncounterPopup():void {
    this.addNewEncounterPopupDisplay = false;
  }

  openAddNewEncounterPopup():void {
    this.addNewEncounterPopupDisplay = true;
  }

}
