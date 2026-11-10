import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-one',
  imports: [CommonModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit {
  readonly http = inject(HttpClient);
  
  message = signal('');
  data = signal<any>([]);
  isLoading = signal(false);
  
  ngOnInit() {
    this.isLoading.set(true);
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe({
        next: (response) => {
          if (response != null) {
            this.data.set(response);
          }
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.message.set('Data download error!');
        },
      });
  }
}
