import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {

  
  constructor(private route:Router,private api: ApiService){}

  name=""
  address=""
  mobile=""
  email=""
  password=""
  cpassword=""
readValues=()=>
{
  let data: any = {
    "name": this.name,
    "address": this.address,
    "mobile": this.mobile,
    "email": this.email,
    "password": this.password,
    "cpassword": this.cpassword
  }
  if(this.password == this.cpassword){
    this.api.fuseradd(data).subscribe(
      (response: any) => {
        this.name = ""
        this.address = ""
        this.mobile = ""
        this.email = ""
        this.password = ""
        this.cpassword = ""
        if (response.status == "success") {
          alert(response.message)
          this.route.navigate(["/userlogin"])
        } else {
          alert(response.message)
        }
      }
    )
  }else{
    alert("password and confirm password mismatch")
  }
  
}
}