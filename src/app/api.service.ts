import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  loginUser = (data:any)=>{
    return this.http.post("http://localhost:8080/userLogin",data)
  }
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
  getprofiledetails=(dat:any)=>
  {
    return this.http.post("http://localhost:8080/getUserById",dat)
  }
  
  
}
