import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { KnownComponent } from './known/known.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'benifit', component: BenefitsComponent},
  { path: 'knowmore', component: KnownComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
