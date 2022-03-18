import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css']
})
export class AddMemberDialogComponent implements OnInit {

  allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  memberLevelsAlreadyInEncounter: number[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.setMemberLevelsAlreadyInEncounterFromDialogData();
  }

  setMemberLevelsAlreadyInEncounterFromDialogData(): void {
    this.data.encounter.partyMembers.forEach( (member:any) => {
      this.memberLevelsAlreadyInEncounter.push(member.level);
    })

  }

}
