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

  clickedSearchEntry: string = '';

  @Input() searchFieldParams!: INameSearchParams;

  @Input() searchFunction!: (args: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

  inputChanged(newString: string): void {
  
    if (2 <= newString.length) {
      let matching: string[] = [];
      newString = newString.toLowerCase();
      this.searchEntries.forEach(element => {
        if (element.toLowerCase().includes(newString)) {
          matching.push(element);
        }
      });
      this.matchingSearchEntries = [...matching]
    } else {
      this.matchingSearchEntries = [];
    }
  }

  setClickedSearchEntry(clickedSearchEntry: string): void {
    this.clickedSearchEntry = clickedSearchEntry;
    this.searchClick(clickedSearchEntry);
  }

  searchClick(searchString: string): void {
    this.matchingSearchEntries = [];
    this.searchFunction(searchString);
  }
}
