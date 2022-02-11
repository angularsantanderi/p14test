import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturaComponent } from './crear-factura.component';

describe('Componente crear factura', () => {
  let component: CrearFacturaComponent;
  let fixture: ComponentFixture<CrearFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente es creado', () => {
    expect(component).toBeTruthy();
  });

  it('Campo nombre cliente obligatorio', () => {
      const controlCampo = component.formFactura.get('nombreCliente');
      controlCampo.setValue('');
      expect(controlCampo.valid).toBeFalsy();
  })

});
