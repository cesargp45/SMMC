import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-ventas',
  templateUrl: './inicio-ventas.component.html',
  styleUrls: ['./inicio-ventas.component.scss']
})
export class InicioVentasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toBuscar(){
    this.router.navigate(['/ventas']);
  }
  toGuardar(){
    this.router.navigate(['/crearVenta']);
  }


}
