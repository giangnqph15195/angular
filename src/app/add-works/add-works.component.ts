import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategories } from '../model/categories';
import { Icategory } from '../model/category';
import { IProduct } from '../model/Products';
import { Iworks } from '../model/works';

@Component({
  selector: 'app-add-works',
  templateUrl: './add-works.component.html',
  styleUrls: ['./add-works.component.css']
})
export class AddWorksComponent implements OnInit {
  works: Iworks = {
    name: "",
    image:"",
    desc:"",
    categoryId:""
  }
  categories!: Icategory[] | any
  constructor(private cateservice : WorkserviceService, private route : Router) { }

  ngOnInit(): void {
    this.getvate()
  }
  getvate(){
    this.cateservice.getcategory().subscribe(data=>{
      this.categories = data
    })
  }
  onSubmit(){
    console.log(this.works)
    this.cateservice.addwork(this.works).subscribe(data=>{
      this.route.navigateByUrl("/admin/works")
    })
  }
}
