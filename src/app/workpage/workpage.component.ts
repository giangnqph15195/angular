import { Component, OnInit } from '@angular/core';
import { WorkserviceService } from 'src/service/workservice.service';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-workpage',
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.css']
})
export class WorkpageComponent implements OnInit {
  worklist ! :Iworks[] | any
  constructor(private worksv : WorkserviceService) { }

  ngOnInit(): void {
    this.getworks()
  }
  getworks(){
    this.worksv.getworks().subscribe(data=>{
      this.worklist = data
    })
  }

}
