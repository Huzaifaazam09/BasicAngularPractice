import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'Huzi', age:12 , email:'huzi@123'},
      {name:'usi', age:35 , email:'usi@123'},
      {name:'ali', age:27 , email:'ali@123'},
    ]
  }
}
