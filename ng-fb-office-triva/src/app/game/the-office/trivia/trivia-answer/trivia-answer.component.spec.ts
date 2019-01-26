import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaAnswerComponent } from './trivia-answer.component';

describe('TriviaAnswerComponent', () => {
  let component: TriviaAnswerComponent;
  let fixture: ComponentFixture<TriviaAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
