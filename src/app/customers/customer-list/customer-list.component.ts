import { CustomerService } from './../customer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from '../customer.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[] ;
  subscription: Subscription;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.customerService.customerChanged.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
    this.customers = this.customerService.getCustomers();
  }

  onNewCustomer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
