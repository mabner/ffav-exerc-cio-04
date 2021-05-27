import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  filter = '';
  newFilterEvent = new EventEmitter<string>();

  onInputChange(name: string) {
    this.newFilterEvent.emit(name);
    console.log(name);
  }

  constructor() {}

  ngOnInit(): void {}
}
