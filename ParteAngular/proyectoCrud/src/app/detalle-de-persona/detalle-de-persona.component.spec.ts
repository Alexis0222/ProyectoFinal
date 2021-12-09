import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDePersonaComponent } from './detalle-de-persona.component';

describe('DetalleDePersonaComponent', () => {
  let component: DetalleDePersonaComponent;
  let fixture: ComponentFixture<DetalleDePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
