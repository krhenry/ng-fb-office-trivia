import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuestionComponent } from './trivia-question.component';

describe('TriviaQuestionComponent', () => {
  let component: TriviaQuestionComponent;
  let fixture: ComponentFixture<TriviaQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
