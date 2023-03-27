import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaEmployeeComponent } from './tabella-employee.component';

describe('TabellaEmployeeComponent', () => {
  let component: TabellaEmployeeComponent;
  let fixture: ComponentFixture<TabellaEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
