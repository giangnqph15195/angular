import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/service/guard/admin.guard';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { CategoryWorkComponent } from './category-work/category-work.component';
import { DetailPDComponent } from './detail-pd/detail-pd.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutsAdminComponent } from './layuots/layuot-admin/layouts-admin/layouts-admin.component';
import { LayuotsWebComponent } from './layuots/layuot-web/layuots-web/layuots-web.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
// import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkpageComponent } from './workpage/workpage.component';

const routes: Routes = [
  {
    path: "",
    component: LayuotsWebComponent,
    children:[
      {
        path:"",
        component: HomepageComponent
      },
      {
        path: "blog",
        component: BlogpageComponent
      },
      {
        path: "works/:id/detail",
        component: WorkDetailComponent
      },
      {
        path: "category/:id",
        component: CategoryWorkComponent
      },
      {
        path: "work",
        component: WorkpageComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: "signin",
        component: SigninComponent
      },

    ]
  },
  
  
  {
    path: "admin", canActivate:[AdminGuard],component:LayoutsAdminComponent, children:[
      {path:"products", component: ProductComponent},
      {path:"products/add", component: ProductAddComponent},
      {path:"products/edit/:id", component: ProductEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
