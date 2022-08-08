import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
   
  // username: string= '';
  constructor( private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.data)
  }

}
