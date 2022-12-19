import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsServicesService } from '../Service/user-details-services.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  result:any;

  error:any;

  errormsg:any;
teamname:any=localStorage.getItem("teamName")
  constructor(private user:UserDetailsServicesService, private router:Router) {}



  ngOnInit(): void {

    this.user.listuser().subscribe(res=>{

      console.log(res);

      this.result=res;

    },err=>{

      console.log("error")

      console.log(err);

      this.error = err;

      // console.log(err.message);

      // this.errormsg = err.message;

    })

  }
sendmail(userId:any){
  this.user.mail(userId).subscribe((res)=>{

  console.log(res);
},(err)=>{

  console.log(err);

 

})

}}

  


