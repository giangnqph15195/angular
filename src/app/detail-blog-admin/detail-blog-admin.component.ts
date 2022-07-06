import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/service/myservice.service';
import { Iblog } from '../model/blog';
import { IProduct } from '../model/Products';

@Component({
  selector: 'app-detail-blog-admin',
  templateUrl: './detail-blog-admin.component.html',
  styleUrls: ['./detail-blog-admin.component.css']
})
export class DetailBlogAdminComponent implements OnInit {
  blog!: Iblog[] | any
  blogdetail! : IProduct
  constructor(private blogsv : MyserviceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.blogsv.getProduct(+id).subscribe(data=>{
      this.blogdetail = data
    })
    this.blogsv.getdetailproduct(+id).subscribe(data=>{
      this.blog = data
      console.log(data)
    })
  }
  remove(id:number){
    
  }
  

}
