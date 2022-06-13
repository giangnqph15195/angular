import { Component, OnInit } from '@angular/core';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategory } from '../model/category';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-workpage',
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.css']
})
export class WorkpageComponent implements OnInit {
  worklist ! :Iworks[] | any
  categories! : Icategory[] | any
  constructor(private worksv : WorkserviceService) { }

  ngOnInit(): void {
    this.getworks()
    this.getcate()
  }
  getworks(){
    this.worksv.getworks().subscribe(data=>{
      this.worklist = data
    })
  }
  getcate(){
    this.worksv.getcategory().subscribe(data =>{

    })
  }

}
