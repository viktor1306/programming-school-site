import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialLessonComponent } from './trial-lesson.component';

describe('TrialLessonComponent', () => {
  let component: TrialLessonComponent;
  let fixture: ComponentFixture<TrialLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
