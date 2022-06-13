import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/service/myservice.service';

import { IProduct } from '../model/Products';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product : IProduct = {
    name: "",
    image: "",
    desc: "",
  }
  constructor(
    private route : ActivatedRoute,
    private productservice : MyserviceService,
    private router : Router
    ) { 
      const id = +this.route.snapshot.paramMap.get("id")!
      console.log(id)
      this.productservice.getProduct(+id).subscribe(data => {
        this.product = data
      })
    }

  ngOnInit(): void {
  }
  onSubmit(){
    const id = +this.route.snapshot.paramMap.get("id")!
    if(id){
      this.productservice.updateProduct(this.product).subscribe(data => {
        console.log("Sửa thành công")
        setTimeout(()=>{
          this.router.navigateByUrl('admin/products')
        },1500)
      })
    }
  }
}
