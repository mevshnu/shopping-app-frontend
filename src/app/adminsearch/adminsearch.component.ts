import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent {
productname=""
 searchData:any=[]
 constructor(private api:ApiService){}
 readsearch=()=>
 {
  let data={"productname":this.productname}
  console.log(data)
  this.api.fsearch(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("invalid")
        
      } else {
        this.searchData=response;
        
      }

    }
  )
 }

}
