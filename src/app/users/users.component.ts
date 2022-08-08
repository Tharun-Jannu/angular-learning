import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  userid =0;
  photoid =0;
  
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=>{

      const altParams = params;
      this.userid= altParams['userid'];
      this.photoid = altParams['photoid'];

    })  
  }

  // title ="this example of data binding";

  ngOnInit(): void {
  }

}
