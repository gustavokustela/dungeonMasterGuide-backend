import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaMesaComponent } from './edita-mesa.component';

describe('EditaMesaComponent', () => {
  let component: EditaMesaComponent;
  let fixture: ComponentFixture<EditaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
