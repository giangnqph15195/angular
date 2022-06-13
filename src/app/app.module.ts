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
    CategoryWorkComponent
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
