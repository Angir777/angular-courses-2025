import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-example-one',
  imports: [],
  templateUrl: './example-one.component.html',
  styleUrl: './example-one.component.scss'
})
export class ExampleOneComponent {
  counter = 0;

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    this.counter++;
  }
}
