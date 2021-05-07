import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-vendedores',
  templateUrl: './inicio-vendedores.component.html',
  styleUrls: ['./inicio-vendedores.component.scss']
})
export class InicioVendedoresComponent implements OnInit {

   constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toBuscar(){
    this.router.navigate(['/vendedores']);
  }
  toGuardar(){
    this.router.navigate(['/crearVendedor']);
  }


}
