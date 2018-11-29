import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaDetalheComponent } from './mesa-detalhe.component';

describe('MesaDetalheComponent', () => {
  let component: MesaDetalheComponent;
  let fixture: ComponentFixture<MesaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
