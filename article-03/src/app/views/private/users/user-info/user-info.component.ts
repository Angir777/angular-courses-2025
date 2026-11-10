import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {

  readonly activatedRoute = inject(ActivatedRoute);

  public id = signal<number | null>(null);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.id.set(+params['id']);
      }
    });
  }
}
