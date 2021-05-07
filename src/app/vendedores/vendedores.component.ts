import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

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
      this.data =[];
      this.data= res.data;
    });
  }


  metodoPromesa():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.librosService.getVendedores()
      .subscribe((data)=>{resolve(data)});
    });
  }


}
