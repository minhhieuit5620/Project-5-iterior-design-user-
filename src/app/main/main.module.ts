import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SliderComponent } from '../shared/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormatContentPipe } from 'src/app/shared/format-content.pipe';
import { CartComponent } from './cart/cart.component';
import { ProjectComponent } from './project/project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { Projects } from '../model/projects/projects.model';
import { ContactComponent } from './contact/contact.component';
import { CateProductComponent } from './cate-product/cate-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { LoginComponent } from './login/login.component';




export const Mainroutes: Routes = [
  {    
    path: '', component: MainComponent ,
    
    children: [
     //{path: '', component: MainsComponent }, 
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      { path: 'products', component: ProductComponent }, 
      {path:'detail/:id/:IdCategory',component:DetailProductComponent},
      { path: 'projects', component: ProjectComponent }, 
      {path:'detailProject/:Id_project/:Id_cate_project',component:DetailProjectComponent},
      {path:'contact',component:ContactComponent},
      //{path:'detailProject',component:DetailProjectComponent},
      {path:'cart',component:CartComponent},
      {path:'getCateProduct/:Id',component:CateProductComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'news',component:NewsComponent},
      {path:'detailNews/:idNew',component:NewsDetailComponent},
      {path:'introduce',component:IntroduceComponent},
      {path:'login',component:LoginComponent},
      // /detailProject/{{item.Id_project}}
    ]
    
  },

];

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    FormatContentPipe,
    DetailProductComponent,
    CartComponent,
    ProjectComponent,
    DetailProjectComponent,
    ContactComponent,
    CateProductComponent,
    CheckoutComponent,
    NewsComponent,
    NewsDetailComponent,
    IntroduceComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
   // MainsRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     
   
   CommonModule, RouterModule.forChild(Mainroutes)
  ],
})
export class MainModule { }
