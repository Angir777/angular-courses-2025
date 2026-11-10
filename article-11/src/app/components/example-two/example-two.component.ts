import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-example-two',
  imports: [],
  templateUrl: './example-two.component.html',
  styleUrl: './example-two.component.scss'
})
export class ExampleTwoComponent {
  message = 'Write something...';

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.message = 'Cleared!';
    }
  }
}
