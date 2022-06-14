import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategory } from '../model/category';
import { IProduct } from '../model/Products';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-works-edit',
  templateUrl: './works-edit.component.html',
  styleUrls: ['./works-edit.component.css']
})
export class WorksEditComponent implements OnInit {
  works : Iworks = {
    name:"",
    image:"",
    desc:"",
    categoryId:""
  }
  categories!: Icategory[] | any
  constructor(private route : ActivatedRoute, private catesv : WorkserviceService, private router : Router) { }

  ngOnInit(): void {
    this.getcate()
    const id = this.route.snapshot.paramMap.get('id')!
    console.log(id)
    this.catesv.getwork(+id).subscribe(data => {
      this.works = data
    })
  }
  onSubmit(){
    console.log(this.works)
    this.catesv.editwork(this.works).subscribe(data=>{
      this.router.navigateByUrl("admin/works")
    })
  }
  getcate(){
    this.catesv.getcategory().subscribe(data => {
      this.categories = data
    })
  }
}
