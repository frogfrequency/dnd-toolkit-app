import { Component, OnInit, Input } from '@angular/core';

import { INameSearchParams } from 'src/app/interfaces/INameSearchParams';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent implements OnInit {

  @Input() searchEntries: string[] = [];

  matchingSearchEntries: string[] = [];

  @Input() searchFieldParams!: INameSearchParams;

  @Input() searchFunction!: (args: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

  inputChanged(newString: string): void {
    
      let matching: string[] = [];
      newString = newString.toLowerCase();
      this.searchEntries.forEach(element => {
          if (element.toLowerCase().includes(newString)) {
              matching.push(element);
          }
      });
      this.matchingSearchEntries = [...matching]
  }

  searchClick(searchString: string): void {
    this.searchFunction(searchString);
  }

}
