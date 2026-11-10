import { Component, OnDestroy, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-five',
  imports: [ReactiveFormsModule],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss'
})
export class FiveComponent implements OnDestroy {
  info = signal('');
  selectedValue = new FormControl('');

  subscription: Subscription;

  constructor() {
    this.subscription = this.selectedValue.valueChanges.subscribe(value => {
      this.handleSelection(value);
    });
  }

  handleSelection(value: string | null) {
    if (value === 'opcja1') {
      this.info.set('Select option 1');
    } else if (value === 'opcja2') {
      this.info.set('Select option 2');
    } else {
      this.info.set('');
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
