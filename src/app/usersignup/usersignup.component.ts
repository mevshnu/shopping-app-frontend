import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {

  
  constructor(private route:Router){}

  name=""
  address=""
  mobile=""
  email=""
  password=""
  cpassword=""
readValues=()=>
{
  if(this.password==this.cpassword)
  {
    this.route.navigate(["/userlogin"])
  }
  else{
    alert("Password and confirm password not match")
  }
}

}
