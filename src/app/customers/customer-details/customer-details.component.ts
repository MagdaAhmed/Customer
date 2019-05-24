import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  id: number;

  constructor(private customerService: CustomerService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.customer = this.customerService.getCustomer(this.id);
    });
  }

  onEditCustomer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.id);
    this.router.navigate(['/customers']);
  }


}
