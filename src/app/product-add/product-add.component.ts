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
  constructor(private addpdser : MyserviceService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.product)
    this.addpdser.addproduct(this.product)
  }
}
