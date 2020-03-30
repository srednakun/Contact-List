import { Component, OnInit } from '@angular/core';

import {Contact} from '../contact';
import {ContactService} from '../contact-service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  	this.getContacts();
  }

  getContacts(): void {
  	this.contacts = this.contactService.getContacts();
  }

  // EditContact(): void {
  //   var firstName = formInfo.value.firstName;
  //   var lastName = formInfo.value.lastName;
  //   //populate form with the selected contact values
  //   getContactByName(firstName, lastName)
  // }



}
