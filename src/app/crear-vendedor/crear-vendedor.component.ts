import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.scss']
})
export class CrearVendedorComponent implements OnInit {

  formData!: FormGroup;


  constructor(private librosService:LibrosService) { }

  ngOnInit(): void {

    this.formData = new FormGroup({
      'nombre':new FormControl(null),
      'dpi':new FormControl(null),
      'apellido':new FormControl(null),
      'direccion':new FormControl(null),
      'telefono':new FormControl(null),
    });
  }



  async guardar(){
    let nuevoVendedor ={
      "nombre": this.formData.value.nombre,
      "dpi": this.formData.value.dpi,
      "apellido": this.formData.value.apellido,
      "direccion": this.formData.value.direccion,
      "telefono": this.formData.value.telefono
    }
    console.log(nuevoVendedor)
    await this.metodoPromesa3(nuevoVendedor).then((res) => {
        alert('vendedor guardado con exito!');
        
    });
    this.formData.reset();
    this.ngOnInit();
  }

  metodoPromesa3(ob:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.guardarVendedor(ob)
        .subscribe((res) => {resolve(res)});
    });
  }

}
