import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @in
  // checkuser: any
  dangxuat! : ""
  constructor() { }
  
  ngOnInit(): void {
    this.dangxuat = JSON.parse(localStorage.getItem('user') as string) 
    console.log(this.dangxuat)
  }
  removelocal(){
    localStorage.removeItem('user')
  }
  users(){
    if(localStorage.getItem('user')){
     this.dangxuat
  }

}
}
