import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = 'Giang 69'
  title = 'my-app';
  price = '';
  productName : string = "Product A";
  productprice : number = 10;
  productsStatus : boolean = false
  
  

  productsInfor : { id:number,name :string, price : number} = {
    id: 1,
    name:"Product B",
    price:250
  }

  productList : {id:number, name: string, price: number, status: boolean}[] = [
    {
      id:1,
      name:"Product 1",
      price: 150,
      status: false
    },
    {
      id:2,
      name:"Product 2",
      price: 2222,
      status: true
    },{
      id:3,
      name:"Product 3",
      price: 3333,
      status: false
    },
  ]
  onHandleClick(){
    this.productsStatus= !this.productsStatus
  }
  deleteitem(id : number){
    delete this.productList[id]
    this.productList = this.productList.filter(product => product.id !== id)
    console.log(id)
  }
  onHandleKey(event: any){
    console.log(event.target.value)
    this.title = event.target.value 
  }
  onClickSubmit(userlogin: any){
    console.log(userlogin)
  }

  onHandlAdd(product: any){
    this.productList.push(product)
  }
 
}
