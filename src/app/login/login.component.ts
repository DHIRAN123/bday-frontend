import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Service/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result:any;
  validator=false;
  constructor(private user:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(form:NgForm){
    console.log(form.value);
      this.user.login(form.value).subscribe((res)=>{
        this.result=res;
        
        console.log(this.result);
        localStorage.setItem('userId',this.result.data.userId)
        localStorage.setItem('role',this.result.data.role)
        localStorage.setItem('firstname',this.result.data.firstname)
        localStorage.setItem('lastname',this.result.data.lastname)
        localStorage.setItem('email',this.result.data.email)
        localStorage.setItem('teamId',this.result.data.team.id)
        localStorage.setItem('teamName',this.result.data.team.teamName)
        
        this.router.navigate(['/listuser'])
        
        
  
      },(err)=>{
        console.log(err);
        this.validator=true;
        
      })
    }
    
    
  }

