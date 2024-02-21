import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-p',
  templateUrl: './child-p.component.html',
  styleUrls: ['./child-p.component.css']
})
export class ChildPComponent implements OnInit {

  constructor() { }

  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
