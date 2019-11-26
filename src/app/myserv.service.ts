import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyservService {
  myurl="https://jsonplaceholder.typicode.com/comments/";
  loginurl="https://192.168.1.155:8089/login";
  constructor(private ht:HttpClient) { }
  getd()
  {
 return  this.ht.get("https://jsonplaceholder.typicode.com/photos")
  }
send(d)
{
  return this.ht.post(this.loginurl,d)
}




  deldata():Observable<any>
  {
    var s=6;
// return this.ht.get(this. myurl+"/13");
return this.ht.get(`${this. myurl}/${s}`);
  }
}
