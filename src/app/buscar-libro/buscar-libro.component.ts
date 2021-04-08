import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-buscar-libro',
  templateUrl: './buscar-libro.component.html',
  styleUrls: ['./buscar-libro.component.scss']
})
export class BuscarLibroComponent implements OnInit {

  data:any = [];
  term!: string;
  filterTerm: string = "";

  constructor(
    private router: Router,
    private librosService:LibrosService
  ) { }

  ngOnInit(): void {
    this.llenar();
  }

  async llenar(){
    await this.metodoPromesa().then((res) => {
      this.data =[];
      this.data= res.res;
    });
  }


  metodoPromesa():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.getLibros()
      .subscribe((res)=>{resolve(res)});
    });
  }

}
