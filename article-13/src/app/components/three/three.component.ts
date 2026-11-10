import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { debounceTime, Observable, of, Subject, catchError, concat, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';

interface SimpleUser {
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-three',
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent implements OnInit {
  readonly http = inject(HttpClient);

  users$: Observable<SimpleUser[]> = of([]);
  usersInput$ = new Subject<string>();
  selectedUserItem: SimpleUser | null = null;
  isLoadingUsers = signal(false);

  ngOnInit(): void {
    this.selectedUserItem = {
      login: "Angir777",
      avatar_url: "https://avatars.githubusercontent.com/u/90105508?v=4"
    };

    this.prepareAsyncNgSelectData();
  }

  private prepareAsyncNgSelectData() {
    this.users$ = concat(
      of(this.selectedUserItem ? [this.selectedUserItem] : []),
      this.usersInput$.pipe(
        filter(term => typeof term === 'string' && term.length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoadingUsers.set(true))),
        switchMap(term =>
          this.searchUsers(term).pipe(
            catchError(() => of([])),
            tap(() => (this.isLoadingUsers.set(false)))
          )
        )
      )
    );
  }

  private searchUsers(term: string): Observable<SimpleUser[]> {
    return this.http.get<{ items: SimpleUser[] }>(`https://api.github.com/search/users?q=${term}`)
      .pipe(
        tap(() => (this.isLoadingUsers.set(false))),
        switchMap(response => of(response.items))
      );
  }
}
