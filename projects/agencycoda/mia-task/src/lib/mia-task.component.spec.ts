import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaTaskComponent } from './mia-task.component';

describe('MiaTaskComponent', () => {
  let component: MiaTaskComponent;
  let fixture: ComponentFixture<MiaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
