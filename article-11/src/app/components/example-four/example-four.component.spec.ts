import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFourComponent } from './example-four.component';

describe('ExampleFourComponent', () => {
  let component: ExampleFourComponent;
  let fixture: ComponentFixture<ExampleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
