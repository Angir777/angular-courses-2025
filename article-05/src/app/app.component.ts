import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HooksTestComponent } from './components/hooks-test/hooks-test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HooksTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  currentNumber = signal(0);

  addNumber() {
    this.currentNumber.update(value => value + 1);
  }
}
