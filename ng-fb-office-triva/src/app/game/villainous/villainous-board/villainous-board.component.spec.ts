import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainousBoardComponent } from './villainous-board.component';

describe('VillainousBoardComponent', () => {
  let component: VillainousBoardComponent;
  let fixture: ComponentFixture<VillainousBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainousBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainousBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
