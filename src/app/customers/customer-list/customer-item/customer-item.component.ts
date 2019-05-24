import { Customer } from './../../customer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer: Customer;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
