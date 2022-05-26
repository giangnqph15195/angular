import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPDComponent } from './detail-pd/detail-pd.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
// import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path :"products",
  component: ProductComponent,
}, {
  path:'products/:id',
  component: DetailPDComponent
}
, {
  path:'product/add',
  component: ProductAddComponent
},
{
  path: 'product/edit/:id',
  component: ProductEditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
