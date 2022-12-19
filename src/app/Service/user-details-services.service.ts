import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsServicesService {
 teamId=localStorage.getItem("teamId")
  constructor(private http:HttpClient){}
  listuser(){
    return this.http.get(`http://localhost:8080/userbyteamid/${this.teamId}`)
  }
mail(userid:number){
  return this.http.get(`http://localhost:8080/sendmail/${userid}`)
}
}
