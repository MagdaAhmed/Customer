import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent, children: [
    {path: '', component: CustomerStartComponent},
    {path: 'new', component: CustomerEditComponent},
    {path: ':id', component: CustomerDetailsComponent},
    {path: ':id/edit', component: CustomerEditComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
