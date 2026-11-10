import { Component, inject } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/can-deactivate/can-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements CanComponentDeactivate {
  name = '';
  isSaved = false;

  readonly router = inject(Router);

  // Method called by guard
  canDeactivate(): boolean {
    // Checking if the form has been saved
    if (!this.isSaved && this.name.trim()) {
      return confirm('You have unsaved changes. Are you sure you want to leave the page?');
    }
    return true; // If there are no changes, you can leave the page
  }

  save() {
    this.name = '';
    this.isSaved = true;
    alert('Form saved!');
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
