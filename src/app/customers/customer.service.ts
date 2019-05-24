import { Customer } from './customer.model';
import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerChanged = new Subject<Customer[]>();
  private customers: Customer[] = [
    new Customer(
      124,
      'Magda',
      'Cairo',
      'Female',
      12567,
      '21/5/2019'
    ),
    new Customer(
      128,
      'Ali',
      'Cairo',
      'Male',
      12337,
      '1/5/2018'
    ),
    new Customer(
      168,
      'Ahmed',
      'Alexandria',
      'Male',
      47837,
      '1/9/2018'
    )
  ];

  constructor() { }

  getCustomers() {
    return this.customers.slice(); // to get a copy of the array outsde service
  }
  getCustomer(index: number) {
    return this.customers.slice()[index];
  }
  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.customerChanged.next(this.customers.slice());
  }
  updateCustomer(index: number, newCustomer: Customer) {
    this.customers[index] = newCustomer;
    this.customerChanged.next(this.customers.slice());
  }
  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    this.customerChanged.next(this.customers.slice());
  }
  setCustomers(customers: Customer[]) {
    this.customers = customers;
    this.customerChanged.next(this.customers.slice());
  }

}
