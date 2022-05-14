import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('data') productList!: {id:number, name: string, price: number, status: boolean}[]
  showproduct! : { id:number,name :string, price : number} | undefined

  constructor() { }

  ngOnInit(): void {
  }
  onShow(id : number){
    this.showproduct = this.productList.find(item =>item.id == id!)
  }

}
