import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaInputComponent } from './cva-input.component';

describe('CvaInputComponent', () => {
  let component: CvaInputComponent;
  let fixture: ComponentFixture<CvaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
