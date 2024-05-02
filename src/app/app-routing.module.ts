import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DetailPage2Component } from './detail-page2/detail-page2.component';


const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'contacts', component: ContactsComponent },
  {path:'detailpage/:id', component:ProductDetailsComponent
   },
  {path:'detailpage/:id/detailpage2/:id', component:DetailPage2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  exports: [RouterModule,CommonModule,RouterLink,RouterLinkActive,RouterOutlet]
})
export class AppRoutingModule { }
