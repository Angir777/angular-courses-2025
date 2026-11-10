import { AfterContentChecked, AfterContentInit, afterNextRender, afterRender, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks-test',
  imports: [],
  templateUrl: './hooks-test.component.html',
  styleUrl: './hooks-test.component.scss'
})
export class HooksTestComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy {
  @Input() number!: number;
  private previousNumber?: number;

  constructor() {
    console.log('Constructor!');

    afterNextRender(() => {
      console.log('afterNextRender!');
    });

    afterRender(() => {
      console.log('afterRender!');
    });
  }

  ngOnInit() {
    console.log('ngOnInit!');
  }

  ngOnChanges() {
    console.log(`ngOnChanges! New number ${this.number}`);
  }

  ngDoCheck() {
    if (this.number !== this.previousNumber) {
      console.log(`ngDoCheck! Number changed from ${this.previousNumber} to ${this.number}`);
      this.previousNumber = this.number;
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit!')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy!');
  }
}
