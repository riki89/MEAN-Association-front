import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  url:string =  "http://172.19.140.119:3000/api";
  constructor(private http:HttpClient) { }

  getOneMember(id:string){
    return this.http.get(this.url+"/members/"+id);
  }

  getMembers(){
    return this.http.get(this.url+"/members");
  }
}
