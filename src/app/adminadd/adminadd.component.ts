import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent {
  productname=""
  image=""
  category=""
  description=""
  price=""
constructor(private api:ApiService){}
  readAdd=()=>
  {
    let data2:any={"name":this.productname,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
  console.log(data2)
  this.api.fadminadd(data2).subscribe(
    (response:any)=>
    {
      console.log(response)
    }
  )
  }

}
