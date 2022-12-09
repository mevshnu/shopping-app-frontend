import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  email=""
  password=""
  constructor(private route:Router,private api:ApiService){}
  readlogin=()=>
  {
    let data3:any={"username":this.email,"password":this.password}
  
  
  
  this.api.loginUser(data3).subscribe(
    (response :any)=>
    {
      this.email=""
      this.password=""
      if (response.status == "success") {
        let userId=response.userId
        this.route.navigate(["/userview"])
        console.log(userId)
        localStorage.setItem("userinfo",userId)
      } else {
        alert(response.message)
      }
    }
  )
  }
}
