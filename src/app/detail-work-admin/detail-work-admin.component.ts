import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkserviceService } from 'src/service/workservice.service';
import { Icategories } from '../model/categories';

@Component({
  selector: 'app-detail-work-admin',
  templateUrl: './detail-work-admin.component.html',
  styleUrls: ['./detail-work-admin.component.css']
})
export class DetailWorkAdminComponent implements OnInit {
  workcate!: Icategories[] | any
  categories!: Icategories[] | any 
  constructor(private route : ActivatedRoute, private cateservice : WorkserviceService) {
    const id = this.route.snapshot.paramMap.get('id')!
    console.log(id)
    this.cateservice.category(+id).subscribe( data => {
      this.workcate = data
    }
      
        )
   }

  ngOnInit(): void {
   this.getcate()
  }

 getcate(){
  this.cateservice.getcategory().subscribe(data=>{
    this.categories = data
  })
 }
 remove(id: number){
  console.log("djasd")
  const confirm = window.confirm("Bạn có muốn xóa không")
  if(confirm){
    
      console.log("xóa thành công")
  }
  
}
}
