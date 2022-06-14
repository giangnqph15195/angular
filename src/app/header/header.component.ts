import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @in
  checkuser: any
  constructor() { }
  
  ngOnInit(): void {
    this.checkuser = JSON.parse(localStorage.getItem('user') as string) 
    console.log(this.checkuser)
  }
//   users(){
//     if(localStorage.getItem('user')){
//      `<i class="fa-solid fa-right-from-bracket"></i>`
//   }

// }
}
