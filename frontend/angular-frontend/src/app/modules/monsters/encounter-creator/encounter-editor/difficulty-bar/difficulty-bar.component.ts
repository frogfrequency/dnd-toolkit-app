import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty-bar',
  templateUrl: './difficulty-bar.component.html',
  styleUrls: ['./difficulty-bar.component.css']
})
export class DifficultyBarComponent implements OnInit {

  @Input() thresholds: number[] = [];
  @Input() monsterXpAdjusted: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
