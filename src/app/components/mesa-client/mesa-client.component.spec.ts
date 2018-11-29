import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaClientComponent } from './mesa-client.component';

describe('MesaClientComponent', () => {
  let component: MesaClientComponent;
  let fixture: ComponentFixture<MesaClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
