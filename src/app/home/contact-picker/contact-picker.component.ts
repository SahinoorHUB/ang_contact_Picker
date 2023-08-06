import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html',
  styleUrls: ['./contact-picker.component.css']
})
export class ContactPickerComponent {
  contacts: any;
  contact_string: any;

  async pickContact() {
    if ('contacts' in navigator) {
      try {
        // const contacts = await navigator["contacts"].select(['name', 'email']);
        const contacts_list: any = await navigator["contacts"];
        this.contacts = await contacts_list.select(['name', 'email', 'tel'])
        this.contact_string = JSON.stringify(this.contacts);
      } catch (error) {
        alert('Error selecting contacts:');
      }
    } else {
      alert('Contact Picker API not supported in this browser.');
    }
  }
}
