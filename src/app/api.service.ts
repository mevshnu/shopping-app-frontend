import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fview=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  fadminadd=(productadd:any)=>
  {
    return this.http.post("http://localhost:8080/addproduct",productadd)
  }
  fuseradd=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/adduser",dataToSend)
  }
  fsearch=(datatosearch:any)=>
  {
    return this.http.post("http://localhost:8080/search",datatosearch)
  }
  
}
