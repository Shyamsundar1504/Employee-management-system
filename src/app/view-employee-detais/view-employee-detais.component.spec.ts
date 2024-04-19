import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeDetaisComponent } from './view-employee-detais.component';

describe('ViewEmployeeDetaisComponent', () => {
  let component: ViewEmployeeDetaisComponent;
  let fixture: ComponentFixture<ViewEmployeeDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEmployeeDetaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEmployeeDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
