import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/service/myservice.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: { name: string, image: string,desc:string } = {
    name: "",
    image: "",
    desc: ""
  }
  constructor(
    private productservice : MyserviceService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.product)
    this.productservice.addproduct(this.product).subscribe(data => {
      console.log("Thêm thành công")
      setTimeout(()=>{
        this.router.navigateByUrl('admin/products')
      },1500)
      
    })
  }
 
}
