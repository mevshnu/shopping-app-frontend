import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usesviews',
  templateUrl: './usesviews.component.html',
  styleUrls: ['./usesviews.component.css']
})
export class UsesviewsComponent {
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
