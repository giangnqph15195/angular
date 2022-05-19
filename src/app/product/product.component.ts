import { Component, Input, OnInit } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input('data') productList!: {id:number, name: string, price: number, status: boolean}[]
  showproduct! : { id:number,name :string, price : number} | undefined
  productList!: any
  constructor(private productSe : MyserviceService) {
    this.getPD()
   }

  ngOnInit(): void {
  }
  getPD(){
    this.productSe.getProducts().subscribe(data => {
      this.productList = data
    }) 
  }
  onShow(id : number){
    // this.showproduct = this.productList.find(item =>item.id == id!)
  }

}
