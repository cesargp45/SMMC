import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarLibroComponent } from './guardar-libro.component';

describe('GuardarLibroComponent', () => {
  let component: GuardarLibroComponent;
  let fixture: ComponentFixture<GuardarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
