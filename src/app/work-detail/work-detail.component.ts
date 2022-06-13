import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkserviceService } from 'src/service/workservice.service';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  workdtail : Iworks ={
    name: "",
    image:"",
    desc:""
  }
  constructor(private route : ActivatedRoute,
    private servicewoek : WorkserviceService) {
    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)
    this.servicewoek.getwork(+id).subscribe(data=>{
      // this.work = data
      this.workdtail = data
    })
   }

  ngOnInit(): void {
  }

}
