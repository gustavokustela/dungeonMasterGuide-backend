import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaMesaComponent } from './deleta-mesa.component';

describe('DeletaMesaComponent', () => {
  let component: DeletaMesaComponent;
  let fixture: ComponentFixture<DeletaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
