import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-userdetails',
  templateUrl: './child-userdetails.component.html',
  styleUrls: ['./child-userdetails.component.css']
})
export class ChildUserdetailsComponent implements OnInit {

  constructor() { }

  @Input() childUserItem:{name:string, email:string}={name:'', email:''}
  ngOnInit(): void {
  }

}
