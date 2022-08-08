import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId: 1, fname: 'tharun', lname :'jannu'},
    {clientId: 2, fname: 'rj', lname:'head'},
    {clientId: 3, fname: 'bj', lname:'coin'},
    {clientId: 4, fname: 'aj', lname:'hand'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
