import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksTestComponent } from './hooks-test.component';

describe('HooksTestComponent', () => {
  let component: HooksTestComponent;
  let fixture: ComponentFixture<HooksTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
