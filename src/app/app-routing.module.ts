import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/service/guard/admin.guard';
import { DetailPDComponent } from './detail-pd/detail-pd.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
// import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "products", canActivate:[AdminGuard], children:[
      {path:"",redirectTo: "list", pathMatch: 'full'},
      {path:"list", component: ProductComponent},
      {path:"add", component: ProductAddComponent},
      {path:"edit/:id", component: ProductEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
