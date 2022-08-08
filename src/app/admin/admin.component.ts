import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // adduserform: FormGroup 
 

  constructor() { }

  ngOnInit(): void {
    // this.adduserform = new FormGroup({
    //   'firstname': new FormControl()
    //   // 'lastname': new FormControl(),
    //   // 'address': new FormControl(),
    //   // 'cell': new FormControl()
    // })
  }

  // addUser(){
  //   //  console.log(this.adduserform.value)
  // }
}
