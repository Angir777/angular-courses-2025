import { Component, inject, signal } from '@angular/core';
import { HooksTestComponent } from '../hooks-test/hooks-test.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HooksTestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly router = inject(Router);

  currentNumber = signal(0);

  addNumber() {
    this.currentNumber.update(value => value + 1);
  }

  goToOtherPage() {
    this.router.navigate(['/contact']);
  }
}
