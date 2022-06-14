import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/service/profile.service';
import { WorkserviceService } from 'src/service/workservice.service';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  worklist ! :Iworks[] | any
  profile! : {name:string, image:string,cv: string, desc: string} | any
  constructor(private worksv : WorkserviceService, private profilesv : ProfileService) {}

  ngOnInit(): void {
    this.getworks()
    this.getprofile()
  }
  getworks(){
    this.worksv.getworks().subscribe(data=>{
      this.worklist = data
    })
  }
  getprofile(){
      this.profilesv.getprodile().subscribe(data=>{
        this.profile = data
      })
  }

}
