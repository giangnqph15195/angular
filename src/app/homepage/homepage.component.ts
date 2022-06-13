import { Component, OnInit } from '@angular/core';
import { WorkserviceService } from 'src/service/workservice.service';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
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
