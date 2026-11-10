import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private http = inject(HttpClient);

  createToken() {
    localStorage.setItem('token', 'test-token-123');
    console.log('Token saved.');
  }

  deleteToken() {
    localStorage.removeItem('token');
    console.log('Token removed.');
  }

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      console.log('Response:', response);
    });
  }

  makeBadRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/invalid-url').subscribe({
      next: (response) => {
        console.log('Response:', response);
      },
      error: (err) => {
        console.error('Global error handler caught:', err);
      }
    });
  }
}
