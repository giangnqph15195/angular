import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/service/myservice.service';
import { IProduct } from '../model/Products';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogdetail! : IProduct
  constructor(private blogsv : MyserviceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.blogsv.getProduct(+id).subscribe(data=>{
      this.blogdetail = data
    })
  }
  

}
