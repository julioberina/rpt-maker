import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public fg: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      query: ['']
    });
  }

  public search() {
    console.log('query = ' + this.fg.controls.query.value);
  }
}
