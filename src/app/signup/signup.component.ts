import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';
import { Iuser } from '../model/Users';
// import {toastr} from 'toastr'
// import 'toastr/build/toastr.min.css'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: Iuser = {
    name: "",
    email: "",
    password: ""
  }
  constructor(private userservice : LoginService,private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userservice.creatUser(this.user).subscribe( data =>{
      console.log("thanh cong roi haha")
      // toastr.success("Bạn đăng ký thành công")
      this.router.navigateByUrl("signin")
    })
    console.log(this.user)
  }
}
