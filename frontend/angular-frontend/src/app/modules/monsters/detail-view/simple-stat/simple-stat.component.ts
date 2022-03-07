import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-stat',
  templateUrl: './simple-stat.component.html',
  styleUrls: ['./simple-stat.component.css']
})
export class SimpleStatComponent implements OnInit {

  @Input() statName: string = '';

  @Input() statValue: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
