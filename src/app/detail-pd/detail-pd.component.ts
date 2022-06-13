import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import moskdata from 'src/data.';
import { MyserviceService } from 'src/service/myservice.service';
import { IProduct } from '../model/Products';
@Component({
  selector: 'app-detail-pd',
  templateUrl: './detail-pd.component.html',
  styleUrls: ['./detail-pd.component.css']
})
export class DetailPDComponent implements OnInit {
  productDetail! :IProduct
  constructor(
    private router: ActivatedRoute,
    private pdetailser : MyserviceService
    ) {
    const id =  this.router.snapshot.paramMap.get('id')!
    console.log(id)
      this.pdetailser.getProduct(+id).subscribe(data => {
        this.productDetail = data
      })
   }

  ngOnInit(): void {
  }

}
