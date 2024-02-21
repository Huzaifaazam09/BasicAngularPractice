import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl , Validators} from '@angular/forms';
// import { UserdataService } from './services/userdata.service';  
import { Usersdata2Service } from './services/usersdata2.service';

import { MessageService } from 'primeng/api'; 
import { PrimeNGConfig } from 'primeng/api'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService], 
})
export class AppComponent { 

//  Temporary commenting this constructor method to use NgStyle contructor down below  
//   constructor( 
//     private messageService: MessageService, 
//     private primengConfig: PrimeNGConfig ,) { } 

// ngOnInit() { 
//     this.primengConfig.ripple = true; 
// } 
// showResponse(_event: any) { 
//     this.messageService.add({ 
//         severity: 'info', 
//         summary: 'Succees', 
//         detail: 'User Responded', 
//         sticky: true, 
//     }); 
// } 
// Above is the code for captchu from primeNg

  // Temporary commented this constructor for other Api Get Constructor
  // datauser1:any;
  // constructor(private userdata4: UserdataService) {
  //   console.warn('userdata', userdata4.users())
  //   this.datauser1=userdata4.users()
  // }


  // TEMPORARY COMMENTED BOTH CONSTRUCTOR API DATA TO CHECK CAPTCHU FROM PrimeNG
  // Get APi Data
  // datauser2:any;
  // constructor( private userdata5: Usersdata2Service )
  // {
  //   userdata5.users().subscribe((d) =>{
  //     console.warn("data", d)
  //     this.datauser2=d
  //   });
  // }

  // Post APi Data
  // getUserFormData(dat:any)
  // {
  //   this.userdata5.saveUsers(dat).subscribe((response) =>{
  //     console.warn(response)
  //   })
  // }


  title = 'My-App';

  data = 'Code step by step';

  name = 'huzaifa azam';

  disable = false;

  show = true;

  color = "purple";

  bgColor = "pink";

  users = ['Huzaifa', 'Ali', 'Usama', 'Hassan'];

  userDetails = [
    {name: 'Huzaifa', email: 'huzi@123', phone: '123'},
    {name: 'Ali', email: 'ali@123', phone: '456'},
    {name: 'Usama', email: 'usama@123', phone: '789'},
  ]

  getValue(){
    return 'Get Function Data'
  }

  getName(){
    alert('Function Called!')
  }


  updateColor(){
    this.color= 'blue', 
    this.bgColor= 'orange'
  }
  
  // Passing Parameters in Function with identifying TYPE as well that is string for now
  getName2(name:string, secondName:string){
    alert(name)
    alert(secondName)
  }

  getData(val:string){
    console.log(val)
  }

  displayVal= ''
  getValue2(val:string){
    console.warn(val)
    this.displayVal= val
  }

  // Counter Button Example
  count = 0
  counter(type:string)
  {
   
   type==='add' ? this.count++ : this.count--;
    
  }

  // Basic Form
  userData:any={};
  getData2(data:NgForm)
  {
    console.log(data)
    this.userData=data
  }

  // Toggle Elements
  // display=true;
  // toggle()
  // {
  //   this.display=!this.display
  // }

  // Todo List in Angular 
  list:any[]=[];

  addTask(item:string){
    this.list.push({ id:this.list.length , name:item });
    console.log(this.list)
  }

  removeTask(id:number){
    console.log(id)
    this.list=this.list.filter(item=>item.id!==id)
  }

  // 1- Passing Data from Parent to child Component
  childData = 10;
  updateChild(){
    this.childData = Math.floor( Math.random()*10 )
  }

  // 2- Passing Data from Parent to child Component Dynamically
  childUserDetails = [
    {name: 'Huzaifa', email: 'huzi@123'},
    {name: 'Ali', email: 'ali@123'},
    {name: 'Usama', email: 'usama@123'},
  ]

  // Passing Data from child to parent Component
  Data2 = "Name";
  updateData(vitem:string){ 
    console.log(vitem)
    this.Data2= vitem
  }

  // Two way Binding
  name2:any
  
  // Pipes in Angular
  data3 = 'Angular Pipes'
  today = Date();

  // Template Driven Form
  userLogin(item:any){
    console.warn(item);
  }

  // Reactive Form & Validations
  loginForm2= new FormGroup({
    user: new FormControl('' , [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  userLogin2(){
    console.warn(this.loginForm2.value)
  }

  get user(){
    return this.loginForm2.get('user')
  }

  get password(){
    return this.loginForm2.get('password')
  }

  // Accordian via PrimeNG
  activeState: boolean[] = [true, false, false];

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }

  // ngStyle ,  we are dynamically styling the elements here on the basics of Random Math Number with the help of ngStyle
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  
  


}
