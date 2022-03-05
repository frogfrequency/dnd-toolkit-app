import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EncounterService } from '../../services/encounter.service';

@Component({
  selector: 'app-add-encounter-popup',
  templateUrl: './add-encounter-popup.component.html',
  styleUrls: ['./add-encounter-popup.component.css']
})
export class AddEncounterPopupComponent implements OnInit {

  @Output() addClick = new EventEmitter;

  constructor(private encounterService: EncounterService) { }

  ngOnInit(): void {
  }

  handleAddNewEncounter(name: string) {
    this.encounterService.addNewEncounter(name);
  }

  handleAddClick(): void {
    this.addClick.emit();
  }

}
