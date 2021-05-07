import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  data:any = [];
  term!: string;
  filterTerm: string = "";

  constructor(
    private router: Router,
    private librosService:LibrosService
  ) { }

  ngOnInit(): void {
    this.llenar();
    console.log(this.data)
  }

  async llenar(){
    await this.metodoPromesa().then((res) => {
      this.data=[];
      this.data= res.data;
      // obtener el libro y el vendedor
    });
    
  }

  
  metodoPromesa():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.getVentas()
      .subscribe((data)=>{resolve(data)});
    });
  }


 




}
