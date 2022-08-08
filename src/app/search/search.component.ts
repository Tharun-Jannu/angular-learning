import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  company='';
  model= '';
  color ='';
  price=0;
  
  //check if form is some fields

  isSome= true
 
  constructor(private activateRoute: ActivatedRoute) { 
    this.activateRoute.queryParams.subscribe(params=>{
       console.log(params)
      this.company=params['company'];
      this.model = params['model'];
      this.color = params['color'];
      this.price= params['price'];
    })
  }

  ngOnInit(): void {
  }

}
