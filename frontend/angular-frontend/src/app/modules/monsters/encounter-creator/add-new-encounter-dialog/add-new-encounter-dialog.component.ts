import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-encounter-dialog',
  templateUrl: './add-new-encounter-dialog.component.html',
  styleUrls: ['./add-new-encounter-dialog.component.css']
})
export class AddNewEncounterDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
