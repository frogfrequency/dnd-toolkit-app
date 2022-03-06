import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEncounter } from 'src/app/interfaces/IEncounter';
import { EncounterService } from '../../services/encounter.service';

import { MatDialog } from "@angular/material/dialog"
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';
import { AddMonsterDialogComponent } from './add-monster-dialog/add-monster-dialog.component';

@Component({
  selector: 'app-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.css']
})
export class EncounterEditorComponent implements OnInit {

  @Input() encounterId!: number;
  @Output() backToOverviewClick = new EventEmitter();

  encounters: IEncounter[] = [];
  encounter!: IEncounter | undefined;

  memberLevelSelectOptions: number[] = [];

  constructor(private encounterService: EncounterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.encounterService.encountersSubject.subscribe(encounters => {
      this.encounters = encounters;
      this.encounter = encounters.find(encounter => encounter.id === this.encounterId);
      this.updateMemberLevelSelectOptions();
    });
    this.openAddMonsterDialog();
  }

  updateMemberLevelSelectOptions(): void {
    let allOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    if (this.encounter) {
      this.encounter.partyMembers.forEach(member => {
        allOptions = allOptions.filter(option => option != member.level);
      })
    }
    this.memberLevelSelectOptions = [...allOptions];
  }

  handleBackToOverClick(): void {
    this.backToOverviewClick.emit();
  }

  openAddMemberDialog(): void {
    let dialogRef = this.dialog.open(AddMemberDialogComponent, { data: this.memberLevelSelectOptions });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`result was ${result}`)
        if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
          this.encounterService.addMemberToEncounter(this.encounter.id, result);
        }
      }
    })
  }

  openAddMonsterDialog(): void {
    let dialogRef = this.dialog.open(AddMonsterDialogComponent);
    dialogRef.afterClosed().subscribe(result =>  {
      if (result) {
        console.log(`add-monster-dialog-result was: ${result}`)
      }
    })
  }

// PARTY-MEMBER-HANDLING

  increaseMemberQuantity(level: number): void {
    if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
      this.encounterService.adjustMemberQuantity(this.encounter.id, level, 'increment');
    }
  }

  decreaseMemberQuantity(level: number): void {
    if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
      this.encounterService.adjustMemberQuantity(this.encounter.id, level, 'decrement');
    }
  }

  removePartyMember(level: number): void {
    if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
      this.encounterService.deleteMember(this.encounter.id, level);
    }
  }

  // MONSTER-HANDLIG

  increaseMonsterQuantity(monsterName: string): void {
    if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
      this.encounterService.adjustMonsterQuantity(this.encounter.id, monsterName, 'increment');
    }
  }

  decreaseMonsterQuantity(monsterName: string): void {
    if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
      this.encounterService.adjustMonsterQuantity(this.encounter.id, monsterName, 'decrement');
    }
  }

  removeMonster(monsterName: string): void {
    if (this.encounter) { // doing this because encounter could be undefined which then could not provide the encounterid to the function
      this.encounterService.deleteMonster(this.encounter.id, monsterName);
    }
  }







}
