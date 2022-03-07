import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEncounter } from 'src/app/interfaces/IEncounter';

@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.css']
})
export class EncounterCardComponent implements OnInit {

  @Input() encounter!: IEncounter;

  @Output() editClick = new EventEmitter;
  @Output() deleteClick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  handleEditClick(): void {
    this.editClick.emit();
  }

  handleDeleteClick(): void {
    this.deleteClick.emit();
  }
  
}
