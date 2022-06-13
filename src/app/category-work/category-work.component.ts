import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategories } from '../model/categories';
import { IProduct } from '../model/Products';

@Component({
  selector: 'app-category-work',
  templateUrl: './category-work.component.html',
  styleUrls: ['./category-work.component.css']
})
export class CategoryWorkComponent implements OnInit {
  workcate!: Icategories[] | any
  categories!: Icategories[] | any 
  constructor(private route : ActivatedRoute, private cateservice : WorkserviceService) {
    const id = this.route.snapshot.paramMap.get('id')!
    console.log(id)
    this.cateservice.category(+id).subscribe( data => {
      this.workcate = data
    }
      
        )
   }

  ngOnInit(): void {
   this.getcate()
  }

 getcate(){
  this.cateservice.getcategory().subscribe(data=>{
    this.categories = data
  })
 }

}
