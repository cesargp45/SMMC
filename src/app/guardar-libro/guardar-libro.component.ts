import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guardar-libro',
  templateUrl: './guardar-libro.component.html',
  styleUrls: ['./guardar-libro.component.scss']
})
export class GuardarLibroComponent implements OnInit {
  formData2!: FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.formData2 = new FormGroup({
      'name':new FormControl(null),
      'editorial':new FormControl(null),
      'pages':new FormControl(null),
    });
  }



  guardar(){
    let nuevoLibro ={
      "name": this.formData2.value.name,
      "editorial": this.formData2.value.editorial,
      "pages": this.formData2.value.pages,
    }

    console.log(nuevoLibro);
  }

}
