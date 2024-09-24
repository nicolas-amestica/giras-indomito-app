import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentContactComponent {

  public contactForm: FormGroup = this.buildForm();

  constructor(private formBuilder: FormBuilder) { }

  buildForm() {
    return this.formBuilder.group({
        name: [ '', [Validators.required] ],
        email: [ '', [Validators.required, Validators.email] ],
        phone: [ '', [Validators.required] ],
        message: [ '', [Validators.required] ],
    });
  }
}
