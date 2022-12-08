import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  username=""
  password=""
  constructor(private route:Router){}
  readlogin=()=>
  {
    let data3:any={"username":this.username,"password":this.password}
  console.log(data3)
  }

}
