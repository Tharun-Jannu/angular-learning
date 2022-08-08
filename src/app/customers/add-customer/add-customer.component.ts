import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  username: string = '';
  terms:boolean= false;
  custtype: string='';
  description: string='';
  constructor() { }

  ngOnInit(): void {
  }
   
   setValue(formValue: NgForm){
    let userdetails ={
      username : 'abcd',
      terms: true,
      custtype: '1',
      description: ''
     }
      formValue.setValue(userdetails)
   }

  addcustomer(formValue: NgForm){
    console.log(formValue.value);
    // vallidations
    // data processing
    // call api to save the data
  }
  resetForm(formValue: NgForm){
    // formValue.reset()
    formValue.resetForm()
  }
}
