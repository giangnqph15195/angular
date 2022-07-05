import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';
import { ProfileService } from 'src/service/profile.service';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategory } from '../model/category';
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
  categories! : Icategory[] | any
  constructor(private worksv : WorkserviceService, private profilesv : ProfileService, private blogsv : MyserviceService) {}

  ngOnInit(): void {
    this.getcate()
    this.getprofile()
    this.getblog()
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
  getcate(){
    this.worksv.getcategory().subscribe(data =>{
      this.categories= data
    })
  }

}
