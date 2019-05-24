import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  editMode = false;
  customerForm: FormGroup;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null ;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let customerName = '';
    let customerCode;
    let customerAddress = '';
    let customerGender = '';
    let customerAccountNum;
    let customerContractDate = '';

    if (this.editMode) {
      const customer = this.customerService.getCustomer(this.id);
      customerName = customer.name;
      customerCode = customer.code;
      customerAddress = customer.address;
      customerGender = customer.gender;
      customerAccountNum = customer.accountNumber;
      customerContractDate = customer.contractDate;
    }
    this.customerForm = new FormGroup({
      'name': new FormControl(customerName, Validators.required),
      'code': new FormControl(customerCode, Validators.required),
      'address': new FormControl(customerAddress, Validators.required),
      'gender': new FormControl(customerGender, Validators.required),
      'accountNumber': new FormControl(customerAccountNum, Validators.required),
      'contractDate': new FormControl(customerContractDate, Validators.required),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.customerService.updateCustomer(this.id, this.customerForm.value);
    } else {
      this.customerService.addCustomer(this.customerForm.value);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

}
