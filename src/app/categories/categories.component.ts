import { Component, OnInit } from '@angular/core';
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
  constructor(private catesv : WorkserviceService) { }

  ngOnInit(): void {
    this.getcate()
  }
  getcate(){
    this.catesv.getcategory().subscribe(data =>{
      this.catelist = data
    })
  }
  remove(){
    console.log("djasd")
  }

}
