import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface User {
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-form-two',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-two.component.html',
  styleUrl: './form-two.component.scss'
})
export class FormTwoComponent implements OnInit {
  form!: FormGroup;

  user = signal<User | null>(null);

  userExample: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  };

  ngOnInit(): void {
    this.createForm();

    // this.user.set(this.userExample);

    if (this.user() !== null) {
      this.updateForm(this.user());
    }
  }

  createForm() {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
      }
    );
  }

  updateForm(user: User | null) {
    if (user) {
      this.form.patchValue(user);
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);
      return;
    }

    alert('Form data: ' + JSON.stringify(this.form.value, null, 2));

    this.form.reset();
  }

  // The function forces errors to be displayed in all form fields.
  validateAllFormFields = (formGroup: FormGroup): void => {
    Object.keys(formGroup.controls).forEach((field: string) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  };
}
