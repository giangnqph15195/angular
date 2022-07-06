import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { DetailPDComponent } from './detail-pd/detail-pd.component';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from 'src/service/myservice.service';
import { RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LayoutsAdminComponent } from './layuots/layuot-admin/layouts-admin/layouts-admin.component';
import { LayuotsWebComponent } from './layuots/layuot-web/layuots-web/layuots-web.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { WorkpageComponent } from './workpage/workpage.component';
import { CategoryWorkComponent } from './category-work/category-work.component';
import { AdminWorksComponent } from './admin-works/admin-works.component';
import { AddWorksComponent } from './add-works/add-works.component';
import { WorksEditComponent } from './works-edit/works-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { DetailWorkAdminComponent } from './detail-work-admin/detail-work-admin.component';
import { DetailBlogAdminComponent } from './detail-blog-admin/detail-blog-admin.component';
import { AddDetailBlogComponent } from './add-detail-blog/add-detail-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductAddComponent,
    DetailPDComponent,
    ProductEditComponent,
    SignupComponent,
    SigninComponent,
    LayoutsAdminComponent,
    LayuotsWebComponent,
    HomepageComponent,
    BlogpageComponent,
    WorkpageComponent,
    CategoryWorkComponent,
    AdminWorksComponent,
    AddWorksComponent,
    WorksEditComponent,
    CategoriesComponent,
    BlogDetailComponent,
    CategoryAddComponent,
    CategoriesEditComponent,
    DetailWorkAdminComponent,
    DetailBlogAdminComponent,
    AddDetailBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
