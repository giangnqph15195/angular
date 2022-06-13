import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';
import { IProduct } from '../model/Products';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  bloglist!: IProduct[] | any
  constructor(private blogsv: MyserviceService) { }

  ngOnInit(): void {
    this.getblog()
  }

  getblog(){
    this.blogsv.getProducts().subscribe(data=>{
      this.bloglist = data
    })
  }

}
