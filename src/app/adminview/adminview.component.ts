import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent {
  constructor(private api:ApiService)
  {
    api.fview().subscribe(
      (response)=>
      {
        this.datas=response;
      }
    )
  }
datas:any=[]

}
