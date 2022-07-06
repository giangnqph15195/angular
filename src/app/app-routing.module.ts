import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/service/guard/admin.guard';
import { AddWorksComponent } from './add-works/add-works.component';
import { AdminWorksComponent } from './admin-works/admin-works.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
// import { AdminWorksComponent } from './admin-works/admin-works.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryWorkComponent } from './category-work/category-work.component';
import { DetailPDComponent } from './detail-pd/detail-pd.component';
import { DetailWorkAdminComponent } from './detail-work-admin/detail-work-admin.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutsAdminComponent } from './layuots/layuot-admin/layouts-admin/layouts-admin.component';
import { LayuotsWebComponent } from './layuots/layuot-web/layuots-web/layuots-web.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';
// import { HeaderComponent } from './header/header.component';
// import { ProductComponent } from './product/product.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WorkpageComponent } from './workpage/workpage.component';
import { WorksEditComponent } from './works-edit/works-edit.component';

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
      },{
        path: "blog/:id",
        component: BlogDetailComponent
      },
     
      {
        path: "works/:id/detail",
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
      {path:"products/edit/:id", component: ProductEditComponent},

      {path: "blog", component: BlogComponent},
      {path: "works/add", component: AddWorksComponent},
      {path:"works/edit/:id", component: WorksEditComponent},

      {path: "works" , component : CategoriesComponent},
      {path:"workss/add", component: CategoryAddComponent},
      {path:"workss/:id", component: DetailWorkAdminComponent},
      {path:"categories/edit/:id", component: CategoriesEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
