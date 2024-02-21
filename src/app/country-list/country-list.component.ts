import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <p class='custom'>
      country-list works!
    </p>
    <h3> -> Click On CountryList Child Components For Child Routing Links</h3>
    <a routerLink="app-countrylist-child1">CountryList Child 1 Component</a> <br>
    <a routerLink="app-countrylist-child2">CountryList Child 2 Component</a> <br>
    <router-outlet></router-outlet>
  `,
  styles: [
    `.custom{color:purple}`
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
