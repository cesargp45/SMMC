import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarLibroComponent } from './buscar-libro/buscar-libro.component';
import { GuardarLibroComponent } from './guardar-libro/guardar-libro.component';
import { InicioVendedoresComponent } from './inicio-vendedores/inicio-vendedores.component';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';
import { CrearVendedorComponent } from './crear-vendedor/crear-vendedor.component';
import { CrearVentaComponent } from './crear-venta/crear-venta.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosAlumnosComponent,
    EditarAlumnoComponent,
    InicioComponent,
    BuscarLibroComponent,
    GuardarLibroComponent,
    InicioVendedoresComponent,
    InicioVentasComponent,
    CrearVendedorComponent,
    CrearVentaComponent,
    VendedoresComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
