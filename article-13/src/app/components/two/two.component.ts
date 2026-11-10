import { Component, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent implements OnInit {
  message = signal('I\'m waiting for data...');

  ngOnInit() {
    const observable = new Observable<string>(observer => {
      setTimeout(() => observer.next('Data has been downloaded!'), 2000);
    });
    
    observable.subscribe(value => this.message.set(value));
  }
}
