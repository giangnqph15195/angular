import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/service/myservice.service';
import { ProductsdetailService } from 'src/service/productsdetail.service';
import { Iblogdeatail } from '../model/blogdetail';
import { IProduct } from '../model/Products';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  productl!: IProduct[]|any
  productsdetail: Iblogdeatail |any ={
    name:"",
    image:"",
    desc:"",
    productId:0
  }
  constructor(private pdsv: MyserviceService, private pddetail: ProductsdetailService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.getPD()
    const id = this.route.snapshot.paramMap.get('id')!
    console.log(id)
    this.pddetail.getone(+id).subscribe(data => {
      this.productsdetail = data
    })
  }
  getPD(){
    this.pdsv.getProducts().subscribe(data=>{
      this.productl = data
    })
  }
  onSubmit(){
    console.log(this.productsdetail)
    this.pddetail.update(this.productsdetail).subscribe(data=>{
      console.log("tahnh cong")
    })
  }
}
