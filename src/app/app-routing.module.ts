import { guardedExpression } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLibroComponent } from './buscar-libro/buscar-libro.component';
import { CrearVendedorComponent } from './crear-vendedor/crear-vendedor.component';
import { CrearVentaComponent } from './crear-venta/crear-venta.component';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { GuardarLibroComponent } from './guardar-libro/guardar-libro.component';
import { InicioVendedoresComponent } from './inicio-vendedores/inicio-vendedores.component';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VentasComponent } from './ventas/ventas.component';

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
    path: 'inicioVentas',
    component: InicioVentasComponent
  },
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'crearVenta',
    component: CrearVentaComponent
  },
  {
    path: 'inicioVendedores',
    component: InicioVendedoresComponent
  },
  {
    path: 'vendedores',
    component: VendedoresComponent
  },
  {
    path: 'crearVendedor',
    component: CrearVendedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
