import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

interface Note {
  id: number | null;
  author: string;
  items: Item[];
}

interface Item {
  id: number | null;
  name: string;
}

@Component({
  selector: 'app-form-three',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-three.component.html',
  styleUrl: './form-three.component.scss'
})
export class FormThreeComponent {
  form!: FormGroup;

  note = signal<Note | null>(null);

  noteExample: Note = {
    id: 1,
    author: 'John Doe',
    items: [
      {
        id: 1,
        name: "Item One"
      },
      {
        id: 2,
        name: "Item Two"
      }
    ],
  };

  ngOnInit(): void {
    // Create a form
    this.createForm();

    // Adding the first empty position to the start
    this.additionalItem();

    this.note.set(this.noteExample);
    if (this.note() !== null) {
      // Form update
      this.updateForm(this.note());
    }
  }

  // Create a form
  createForm() {
    this.form = new FormGroup(
      {
        author: new FormControl(null, [Validators.required]),
        itemsGroup: new FormArray([]),
      }
    );
  }

  // Form update
  updateForm(note: Note | null) {
    if (note) {
      // Main fields
      this.form.patchValue({
        author: note.author,
      });

      // Group fields
      if (note.items && note.items.length > 0) {
        for (let index = 0; index < note.items.length; index++) {
          // Skipping the first position because it is already created at the start
          if (index > 0) {
            // Adding a group item
            this.additionalItem();
          }
          // Data assignment
          const item = note.items[index];
          (this.form.get('itemsGroup') as FormArray).at(index).get('id')?.setValue(item?.id);
          (this.form.get('itemsGroup') as FormArray).at(index).get('name')?.setValue(item?.name);
        }
      }
    }
  }

  /**
   * FormArray
   */
  
  // Adding a group item
  additionalItem() {
    (this.form.get('itemsGroup') as FormArray).push(this.createItem);
  }

  // Deleting a group item
  deleteGroupItem(index: number) {
    const groupArray = this.form.get('itemsGroup') as FormArray;
    if (index >= 0 && index < groupArray.length) {
      groupArray.removeAt(index);
    }
  }

  get createItem(): FormGroup {
    return new FormGroup({
      id: new FormControl(null, []),
      name: new FormControl(null, [Validators.required]),
    });
  }

  get itemsGroupArray(): FormArray {
    return this.form.get('itemsGroup') as FormArray;
  }

  /**
   * Save
   */

  onSubmit() {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);
      return;
    }

    alert('Form data: ' + JSON.stringify(this.form.value, null, 2));

    this.form.reset();
  }

  // The function forces errors to be displayed in all form fields.
  validateAllFormFields = (formGroup: FormGroup | FormArray): void => {
    Object.keys(formGroup.controls).forEach((field: string) => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateAllFormFields(control);
      }
    });
  };
}
