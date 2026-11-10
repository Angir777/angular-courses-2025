import { Component, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-four',
  imports: [],
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss'
})
export class FourComponent implements OnInit {
  time = signal(0);
  
  ngOnInit(): void {
    interval(1000).subscribe(val => this.time.set(val));
  }
}
