import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-example-four',
  imports: [],
  templateUrl: './example-four.component.html',
  styleUrl: './example-four.component.scss'
})
export class ExampleFourComponent {
  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event): void {
    event.preventDefault();
    event.returnValue = false;
  }

  @HostListener('window:unload', ['$event'])
  handleUnload(event: Event): void {
    console.log('The page is closing or refreshing.');
  }
}
