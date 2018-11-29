import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMesaComponent } from './nova-mesa.component';

describe('NovaMesaComponent', () => {
  let component: NovaMesaComponent;
  let fixture: ComponentFixture<NovaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
