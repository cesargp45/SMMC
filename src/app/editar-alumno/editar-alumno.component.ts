import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {
  nombreSelect:any;
  constructor() { }

  ngOnInit(): void {
    this.nombreSelect = localStorage.getItem("nomb");
    alert("va a editar a "+this.nombreSelect);
  }



}
