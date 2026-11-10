
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  imports: [FormsModule],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.scss'
})
export class FormOneComponent {
  user = {
    name: '',
    email: '',
    age: null
  };

  onSubmit(form: NgForm) {
    alert('Dane formularza: ' + JSON.stringify(form.value, null, 2));

    form.reset();
  }
}
