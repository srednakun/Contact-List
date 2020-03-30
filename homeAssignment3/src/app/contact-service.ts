import {Injectable} from '@angular/core';

import {Contact} from './contact';
import {CONTACTS} from './contact-data';

@Injectable()
	export class ContactService {


		constructor() {}

		getContacts(): Contact[] {
			return CONTACTS;
		}

		addContact(firstName, lastName, phoneNum, email): void{
			CONTACTS.push(new Contact(firstName, lastName, phoneNum, email));

		}

		getContactByName(firstName, lastName): void {

			// for(var contact in CONTACTS){
			// 	if(contact.firstName == firstName && contact.lastName == lastName){
			// 		return contact;
			// 	}
			// }

			for (var i = 0; i < CONTACTS.length; i++){
				console.log(CONTACTS[i]);
			}

			// CONTACTS.forEach(function(contact){
			// 	if(contact.firstName == firstName && contact.lastName == lastName){
			// 		return contact;
			// 	}
			// });

			// var contact1 = new Contact("Sredna", "Kunowski", "111-222-3333", "sredna@yahoo.com");
			// if(true){
			// 	return contact1;
			// }
			

		}
	}

	