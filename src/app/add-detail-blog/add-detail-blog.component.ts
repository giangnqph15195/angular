import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';
import { ProductsdetailService } from 'src/service/productsdetail.service';
import { Iblogdeatail } from '../model/blogdetail';
import { IProduct } from '../model/Products';

@Component({
  selector: 'app-add-detail-blog',
  templateUrl: './add-detail-blog.component.html',
  styleUrls: ['./add-detail-blog.component.css']
})
export class AddDetailBlogComponent implements OnInit {
  productl!: IProduct[]|any
  productsdetail: Iblogdeatail ={
    name:"",
    image:"",
    desc:"",
    productId:0
  }
  constructor(private pdsv: MyserviceService, private pddetail: ProductsdetailService) { }

  ngOnInit(): void {
    this.getPD()
  }
  getPD(){
    this.pdsv.getProducts().subscribe(data=>{
      this.productl = data
    })
  }
  onSubmit(){
    console.log(this.productsdetail)
    this.pddetail.add(this.productsdetail).subscribe(data=>{
      console.log("tahnh cong")
    })
  }
}
