import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { Iuser } from '../model/Users';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  users: Iuser={
    email: "",
    password:""
  }
  constructor(private userservice : LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userservice.signin(this.users).subscribe(data =>{
      console.log("đang nhâp thành công")
      localStorage.setItem('user', JSON.stringify(data))
    })
    console.log(this.users)
  }
}
