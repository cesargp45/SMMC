import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVendedoresComponent } from './inicio-vendedores.component';

describe('InicioVendedoresComponent', () => {
  let component: InicioVendedoresComponent;
  let fixture: ComponentFixture<InicioVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioVendedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
