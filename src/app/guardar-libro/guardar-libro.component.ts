import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-guardar-libro',
  templateUrl: './guardar-libro.component.html',
  styleUrls: ['./guardar-libro.component.scss']
})
export class GuardarLibroComponent implements OnInit {
  formData!: FormGroup;


  constructor(private librosService:LibrosService) { }

  ngOnInit(): void {

    this.formData = new FormGroup({
      'name':new FormControl(null),
      'editorial':new FormControl(null),
      'pages':new FormControl(null),
    });
  }



  async guardar(){
    let nuevoLibro ={
      "name": this.formData.value.name,
      "editorial": this.formData.value.editorial,
      "pages": parseInt(this.formData.value.pages,10),
    }

      await this.metodoPromesa3(nuevoLibro).then((res) => {
        alert('Libro guardado con exito!');
        
    });
    this.formData.reset();
    this.ngOnInit();
  }

  metodoPromesa3(ob:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.guardarLibro(ob)
        .subscribe((res) => {resolve(res)});
    });
  }

}
