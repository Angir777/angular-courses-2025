import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-example-three',
  imports: [],
  templateUrl: './example-three.component.html',
  styleUrl: './example-three.component.scss'
})
export class ExampleThreeComponent {
  width = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  handleResize(event: Event): void {
    this.width = (event.target as Window).innerWidth;
  }
}
