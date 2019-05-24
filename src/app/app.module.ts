import { CustomerService } from './customers/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerItemComponent } from './customers/customer-list/customer-item/customer-item.component';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerItemComponent,
    CustomerStartComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
