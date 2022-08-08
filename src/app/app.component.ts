import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arcproject';

  lowercaseex ="THARUNJANNU"
  uppercaseex ="welcome to angular learninig"
  dateex = Date.now()
  jsonex = {Id: 10, fname : 'tharun', lname: 'jannu'}
  currencyex = 80
  percentex = 1.505050

  pageHeading = "this example is to learn interpolation angular"
  pageCount =10;
  userObject ={'fname' : 'tharun', 'lname': 'jannu'};

  success_msg = true ;
  isUserLoggedIn=true;

  superpower ='rays';
  tax="50";

  styleprop="red";
  txtColor= "blue";

  styleclsprop='c3';
  conditionstyle='c5';

  imgUrl = "test.png";
  imgAlt = "this image is missing";

  txtColorVal ="red";
  colspanVal=2;
  write= "write something "

  uname ="angular";
  num =10;

  contacts = [
    { 'fname':'tharun' ,'lname': 'jannu', 'contactNo': 12345 },
    { 'fname':'tj' ,'lname': 'jt', 'contactNo': 54321 },
    { 'fname':'rj' ,'lname': 'bj', 'contactNo': 23456 },
  ]

  welcome(){
    console.log("welcome to learning angular")
  }

  highlighting(a: any, b: any){
    console.log("hilighting by mouseover"+a+b)
  }
  
  inputbox()
  {
    console.log("input text")
  }

}
