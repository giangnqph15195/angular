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
  constructor(private productservice : MyserviceService) {
   
   }

  ngOnInit(): void {
    this.getPD()
  }
  getPD(){
    this.productservice.getProducts().subscribe(data => {
      this.productList = data
    }) 
  }
 
  remove(id: number){
    const confirm = window.confirm("bạn có muốn xóa")
    if(confirm){
      this.productservice.removeProduct(id).subscribe(data =>{
        console.log("Xoa thanh công")
      })
    }
  }

}
