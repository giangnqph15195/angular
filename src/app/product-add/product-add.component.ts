import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  product: { name: string, price: number } = {
    name: "",
    price: 0
  }
  onSubmit(){
    console.log(this.product)
    this.onAdd.emit(this.product)
  }
}
