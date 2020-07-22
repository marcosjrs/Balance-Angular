import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMovimientoComponent } from './formulario-movimiento.component';

describe('FormularioMovimientoComponent', () => {
  let component: FormularioMovimientoComponent;
  let fixture: ComponentFixture<FormularioMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
