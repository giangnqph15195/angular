import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';
import { Iuser } from '../model/Users';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  users: Iuser = {
    email: '',
    password: '',
  };
  constructor(private userservice: LoginService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    // this.userservice.signin(this.users).subscribe(data =>{
    //   console.log("đang nhâp thành công")
    localStorage.setItem(
      'user',
      JSON.stringify({
        email: 'giang113@gmail.com',
        password:
          '$2a$10$.N85r.eYOGH/481ui2ZQZejOAVW.Rf/OnEs.xzD7zmEUqpDURqNty',
        name: 'Giang 69',
        id: 1,
      })
    );

    //   const id = JSON.parse(localStorage.getItem("user") || '{}').user.id;
    //   console.log(id)
    //   if(id == 1){
    //  this.router.navigateByUrl('admin')

    //  }else{
    //   this.router.navigateByUrl('/')
    //  }
    // })
    // console.log(this.users)
  }
}
