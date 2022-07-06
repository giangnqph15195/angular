import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/service/profile.service';
import { Iprofile } from '../model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Iprofile| any ={
    name:"",
    image:"",
    cv:"",
    desc:"",
    linkdowload:""
  }
  constructor(private prosv: ProfileService) {
    this.prosv.getprodile().subscribe(data=>{
      this.profile = data
    })
   }

  ngOnInit(): void {
  }
  onsubit(){
    this.prosv.edit(this.profile).subscribe(data=>{
      console.log("thànhcoog")
    })
  }

}
