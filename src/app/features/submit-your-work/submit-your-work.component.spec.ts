import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitYourWorkComponent } from './submit-your-work.component';

describe('SubmitYourWorkComponent', () => {
  let component: SubmitYourWorkComponent;
  let fixture: ComponentFixture<SubmitYourWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitYourWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitYourWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
