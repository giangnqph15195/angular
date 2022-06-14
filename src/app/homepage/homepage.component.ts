import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';
import { ProfileService } from 'src/service/profile.service';
import { WorkserviceService } from 'src/service/workservice.service';
import { IProduct } from '../model/Products';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  worklist ! :Iworks[] | any
  profile! : {name:string, image:string,cv: string, desc: string} | any
  bloglist!: IProduct[] | any
  constructor(private worksv : WorkserviceService, private profilesv : ProfileService, private blogsv : MyserviceService) {}

  ngOnInit(): void {
    this.getworks()
    this.getprofile()
    this.getblog()
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
  getblog(){
    this.blogsv.getlimit().subscribe(data =>{
      this.bloglist = data
    })
  }

}
