import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.scss']
})
export class LoanTypeComponent implements OnInit {

  addLoantypeForm! : FormGroup;
  
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    /*
    // using form group
    this.addLoantypeForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'address': new FormControl(),
      'cell': new FormControl(),
      'fname': new FormControl()
    })
    */

    /*
    // using from builder with direct setvalues
    this.addLoantypeForm = this.fb.group({
      'firstname': new FormControl('jannu'),
      'lastname': new FormControl('tharun'),
      'address': new FormControl('warangal'),
      'cell': new FormControl('999999'),
      'fname': new FormControl('RJ')
    })
    */

    this.addLoantypeForm = this.fb.group({
      'firstname': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'lastname': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'fname': new FormControl(''),
      'cell': new FormControl('', [Validators.required]),
    })

   /* 
   // form builder with setting values in another way
    const newLoanObj ={
      // 'firstname': 'TJ',
      'lastname': 'JT',
      'address': 'warangal',
      'cell': '999999',
      // 'fname': 'RJ'
    }   
    */ 

    // // must set all field values
    // this.addLoantypeForm.setValue(newLoanObj)

    // // optional of giving field values only on demand fields
    //  this.addLoantypeForm.patchValue(newLoanObj)

  }

  addloantype(){

    console.log(this.addLoantypeForm.valid)     //true
    console.log(this.addLoantypeForm.invalid)   //false
    console.log(this.addLoantypeForm.pending)   //false
    console.log(this.addLoantypeForm.pristine)  //false
    console.log(this.addLoantypeForm.dirty)     //true
    console.log(this.addLoantypeForm.touched)   //true
    console.log(this.addLoantypeForm.untouched) //false

    console.log(this.addLoantypeForm.value)  // get all the data from the form
    // console.log(this.addLoantypeForm.get('firstname')?.value)  //get the specific form control value
    
    // //form control value change
    // this.addLoantypeForm.valueChanges.subscribe(data=>{
    //   console.log(data)
    // })
  }

  resetform(){
    this.addLoantypeForm.reset()
  }
  
}
