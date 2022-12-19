import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  constructor(private router:Router){
    
  }
  logout(){

    // localStorage.removeItem('id');

    // localStorage.removeItem('role');

    // localStorage.removeItem("name");
    localStorage.removeItem('userId')
    localStorage.removeItem('role')
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('email')
    localStorage.removeItem('teamId')
    localStorage.removeItem('teamName')
    window.alert("you are successfully logged out");

    this.router.navigate(['/login'])

  }
}
