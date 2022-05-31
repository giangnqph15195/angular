import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { Iuser } from '../model/Users';

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
  constructor(private userservice : LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userservice.creatUser(this.user).subscribe( data =>{
      console.log("thanh cong roi haha")
    })
    console.log(this.user)
  }
}
