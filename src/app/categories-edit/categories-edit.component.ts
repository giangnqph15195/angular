import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/service/categories.service';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategory } from '../model/category';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {
  cate: Icategory | any = {
    name:""
  } 
  constructor( private editcate : CategoriesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.editcate.getcategory(+id).subscribe(data=>{
      this.cate = data
    })
    
  }
  onSubmit(){
    console.log(this.cate)
    this.editcate.updatecategory(this.cate).subscribe(data=>{
      this.router.navigateByUrl("admin/categories")
    })
  }

}
