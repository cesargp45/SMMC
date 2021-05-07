import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.scss']
})
export class CrearVentaComponent implements OnInit {
  formData!: FormGroup;
  lista:any = [{"id":"2","nombre":"cesar"},{"id":"4","nombre":"estela"},{"id":"6","nombre":"pedro"}];
  data2:any = []; // vendedores
  data:any = [];//libros

  dataaux:any=[];
  data2aux:any=[]

  constructor(private librosService:LibrosService) { }

  ngOnInit(): void {
    this.dataaux=[];
    this.data2aux=[];
    this.formData = new FormGroup({
      'vendedor':new FormControl(null),
      'producto':new FormControl(null),
    });
    
    this.llenar();
    this.llenar2();

  }

  async llenar(){
    await this.metodoPromesa().then((res) => {
      this.data =[];
      this.data= res.data;
    });
    for (let index = 0; index < this.data.length; index++) {
        this.dataaux.push(this.data[index].name);
    }
  }


  metodoPromesa():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.getLibros()
      .subscribe((data)=>{resolve(data)});
    });
  }

  async llenar2(){
    await this.metodoPromesa2().then((res) => {
      this.data2 =[];
      this.data2= res.data;
    });

    for (let index = 0; index < this.data2.length; index++) {
      this.data2aux.push(this.data2[index].nombre);
  }
  }


  metodoPromesa2():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.getVendedores()
      .subscribe((data)=>{resolve(data)});
    });
  }



  async guardar(){
    let nuevaVenta ={
      "vendedor": this.formData.value.vendedor,
      "producto": this.formData.value.producto,
    }
    console.log(this.formData.value.vendedor)

      await this.metodoPromesa3(nuevaVenta).then((res) => {
        alert('Libro guardado con exito!');
        
    });
    this.formData.reset();
    this.ngOnInit();
  }

  metodoPromesa3(ob:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.guardarVenta(ob)
        .subscribe((res) => {resolve(res)});
    });
  }
}
