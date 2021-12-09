import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPersonaComponent } from './tarjeta-persona.component';

describe('TarjetaPersonaComponent', () => {
  let component: TarjetaPersonaComponent;
  let fixture: ComponentFixture<TarjetaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
