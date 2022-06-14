import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/service/categories.service';
// import { MyserviceService } from 'src/service/myservice.service';
import { WorkserviceService } from 'src/service/workservice.service';

import { Icategory } from '../model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  catelist!: Icategory[] | any
  constructor(private catesv : WorkserviceService, private categories : CategoriesService) { }

  ngOnInit(): void {
    this.getcate()
  }
  getcate(){
    this.catesv.getcategory().subscribe(data =>{
      this.catelist = data
    })
  }
  remove(id: number){
    console.log("djasd")
    const confirm = window.confirm("Bạn có muốn xóa không")
    if(confirm){
      this.categories.deletecate(id).subscribe(data=>{
        console.log("xóa thành công")
      })
    }
    
  }

}
