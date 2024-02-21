import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datauser1:any;
  constructor(private userdata4: UserdataService) {
    console.warn('userdata', userdata4.users())
    this.datauser1=userdata4.users()
  }

  ngOnInit(): void {
  }

}
