import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import moskdata from 'src/data.';
import { MyserviceService } from 'src/service/myservice.service';
@Component({
  selector: 'app-detail-pd',
  templateUrl: './detail-pd.component.html',
  styleUrls: ['./detail-pd.component.css']
})
export class DetailPDComponent implements OnInit {
  productDetail! :{id:number, name: string, price: number, status: boolean}
  constructor(
    private router: ActivatedRoute,
    private pdetailser : MyserviceService
    ) {
    const id =  this.router.snapshot.paramMap.get('id')!
    console.log(id)
   this.productDetail = this.pdetailser.getProduct(+id)!
   }

  ngOnInit(): void {
  }

}
