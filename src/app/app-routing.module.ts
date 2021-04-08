import { guardedExpression } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLibroComponent } from './buscar-libro/buscar-libro.component';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { GuardarLibroComponent } from './guardar-libro/guardar-libro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'datosAlumnos',
    component: DatosAlumnosComponent
  },
  {
    path: 'editarAlumno',
    component: EditarAlumnoComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'buscarLibro',
    component: BuscarLibroComponent
  },
  {
    path: 'guardarLibro',
    component: GuardarLibroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
