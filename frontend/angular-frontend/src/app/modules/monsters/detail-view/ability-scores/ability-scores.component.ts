import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent implements OnInit {

  @Input() scores: string[][] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
