import { Component, OnInit } from '@angular/core';
import { WorkserviceService } from 'src/service/workservice.service';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-admin-works',
  templateUrl: './admin-works.component.html',
  styleUrls: ['./admin-works.component.css']
})
export class AdminWorksComponent implements OnInit {
  worklist!: Iworks[] | any
  constructor(private servicework : WorkserviceService) { }

  ngOnInit(): void {
    this.getworks()
  }

  getworks(){
    this.servicework.getworks().subscribe(data =>{
      this.worklist = data
    })
  }
  remove(id: number){
    const confirm = window.confirm(" Bạn thực sự muốn xóa")
    if(confirm){
      this.servicework.removework(id).subscribe(data=>{
        console.log("xoa thanh cong")
      })
    }
    
  }
}
