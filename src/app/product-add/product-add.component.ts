import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: { name: string, price: number } = {
    name: "",
    price: 0
  }
  constructor(private productservice : MyserviceService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.product)
    this.productservice.addproduct(this.product).subscribe(data => {
      console.log("Thêm thành công")
    })
  }
 
}
