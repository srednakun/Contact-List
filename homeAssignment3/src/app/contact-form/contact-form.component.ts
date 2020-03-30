import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ContactService} from '../contact-service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})


export class ContactFormComponent {

  contacts: Contact[] = [];

  myname = "sredna";

   isAdd = true;
   isEdit = false;

   currentContact;

  ngOnInit(): void {

    this.getContacts();
  }

  getContacts(): void {
    this.contacts = this.contactService.getContacts();
  }

  setCurrentContact(contact) : void{
    this.currentContact = contact;
  }

  PopulateForm(contact) {


    this.setCurrentContact(contact);

    //disable add contact button
    (<HTMLInputElement>document.getElementById("addBtn")).disabled = true;
    this.isAdd = false;

    (<HTMLInputElement>document.getElementById("editBtn")).disabled = false;
    this.isEdit = true;

    console.log("my name = " + this.myname);
    console.log("firstname: " + contact.firstName);

    //contact.firstName = "sredna";

    (<HTMLInputElement>document.getElementById("firstName")).value = contact.firstName;
    (<HTMLInputElement>document.getElementById("lastName")).value = contact.lastName;
    (<HTMLInputElement>document.getElementById("phoneNum")).value = contact.phoneNum;
    (<HTMLInputElement>document.getElementById("email")).value = contact.email;


  }

  EditContact(){

    console.log("time to edit");
    console.log("current contact = " +this.currentContact.firstName);
    this.currentContact.firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    this.currentContact.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    this.currentContact.phoneNum = (<HTMLInputElement>document.getElementById("phoneNum")).value;
    this.currentContact.email = (<HTMLInputElement>document.getElementById("email")).value;

    alert("Your contact has been updated!");
  }

  AddContact(firstName, lastName, phoneNum, email){

     //add new data to array of objects in file
     this.contactService.addContact(firstName, lastName, phoneNum, email);
     alert("Your contact has been added!");
  }


  //contact1 = new Contact("Sredna", "Kunowski", "111-222-3333", "sredna@yahoo.com");

  submitted = false;
  constructor(private contactService: ContactService) { }

  onSubmit(formInfo: NgForm) {
  	this.submitted = true

  	var firstName = formInfo.value.firstName;
  	var lastName = formInfo.value.lastName;
  	var phoneNum = formInfo.value.phoneNum;
  	var email = formInfo.value.email;

    if(this.isAdd){
        if(formInfo.value.firstname !== "" && formInfo.value.lastName != "" && formInfo.value.phoneNum !== ""
          && formInfo.value.email != ""){
           this.AddContact(firstName, lastName, phoneNum, email);
    }

    }
    formInfo.reset();
    (<HTMLInputElement>document.getElementById("addBtn")).disabled = false;
    this.isAdd = true;

    (<HTMLInputElement>document.getElementById("editBtn")).disabled = true;
    this.isEdit = false;
  };

}
