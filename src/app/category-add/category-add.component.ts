import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/service/categories.service';
import { Icategory } from '../model/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categories : Icategory = {
    name:""
  }
  constructor(private router : Router, private categoriessv : CategoriesService) { }

  ngOnInit(): void {
  }
  onSubit(){
    console.log(this.categories)
    this.categoriessv.addcategories(this.categories).subscribe(data=>{
      this.router.navigateByUrl("admin/categories")
    })
  }
}
