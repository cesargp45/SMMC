import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-alumnos',
  templateUrl: './datos-alumnos.component.html',
  styleUrls: ['./datos-alumnos.component.scss']
})
export class DatosAlumnosComponent implements OnInit {
  data:any = [];
  term!: string;
  filterTerm: string = "";
  nombre:any;
  apellido:any;
  grado:any;
  seccion:any;
  telefono:any;
  correo:any;
  id:any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.llenar();
  }

  info(item:any){
    this.nombre =item.nombre;
    this.apellido = item.apellido;
    this.grado = item.grado;
    this.seccion = item.seccion;
    this.telefono = item.telefono;
    this.correo = item.correo;
    this.id = item.id;
  }
  eliminar(){
    alert("Implementar la parte de eliminar usuarios");
  }

  editar(){
    this.router.navigate(['/editarAlumno']);
    localStorage.setItem("nomb",this.nombre);
  }
  
  llenar(){
    this.data=
    [
      {
        "id": 0,
        "nombre": "Kenya Adela",
        "apellido": "Smith Haynes",
        "correo": "adelahaynes@steeltab.com",
        "telefono": "+502 (935) 441-2291",
        "seccion": "b",
        "grado": "segundo basico"
      },
      {
        "id": 1,
        "nombre": "Clara Pauline",
        "apellido": "Carter Jimenez",
        "correo": "paulinejimenez@steeltab.com",
        "telefono": "+502 (992) 512-3703",
        "seccion": "a",
        "grado": "quinto primaria"
      },
      {
        "id": 2,
        "nombre": "Jacobs Kate",
        "apellido": "Bender Hansen",
        "correo": "katehansen@steeltab.com",
        "telefono": "+502 (909) 552-2930",
        "seccion": "c",
        "grado": "segundo primaria"
      },
      {
        "id": 3,
        "nombre": "Eileen Janette",
        "apellido": "Woodard Terry",
        "correo": "janetteterry@steeltab.com",
        "telefono": "+502 (893) 433-3560",
        "seccion": "a",
        "grado": "segundo basico"
      },
      {
        "id": 4,
        "nombre": "Barlow Cooley",
        "apellido": "Dean Edwards",
        "correo": "cooleyedwards@steeltab.com",
        "telefono": "+502 (809) 596-3786",
        "seccion": "a",
        "grado": "tercero primaria"
      },
      {
        "id": 5,
        "nombre": "Hopkins Zelma",
        "apellido": "Daugherty Browning",
        "correo": "zelmabrowning@steeltab.com",
        "telefono": "+502 (962) 408-3945",
        "seccion": "a",
        "grado": "inicial"
      },
      {
        "id": 6,
        "nombre": "Brooks Ingram",
        "apellido": "Bryant Kemp",
        "correo": "ingramkemp@steeltab.com",
        "telefono": "+502 (991) 416-3528",
        "seccion": "c",
        "grado": "quinto bachillerato"
      },
      {
        "id": 7,
        "nombre": "Helene Jolene",
        "apellido": "Pierce Hancock",
        "correo": "jolenehancock@steeltab.com",
        "telefono": "+502 (963) 586-3060",
        "seccion": "b",
        "grado": "kinder"
      },
      {
        "id": 8,
        "nombre": "Dana Wade",
        "apellido": "Carey Barton",
        "correo": "wadebarton@steeltab.com",
        "telefono": "+502 (902) 442-3419",
        "seccion": "a",
        "grado": "cuarto bachillerato"
      },
      {
        "id": 9,
        "nombre": "Beatriz Burch",
        "apellido": "Perkins Pugh",
        "correo": "burchpugh@steeltab.com",
        "telefono": "+502 (903) 518-2444",
        "seccion": "a",
        "grado": "segundo primaria"
      },
      {
        "id": 10,
        "nombre": "Susan Davidson",
        "apellido": "Nixon Avila",
        "correo": "davidsonavila@steeltab.com",
        "telefono": "+502 (982) 588-2612",
        "seccion": "b",
        "grado": "cuarto primaria"
      },
      {
        "id": 11,
        "nombre": "Eugenia Gena",
        "apellido": "Armstrong Battle",
        "correo": "genabattle@steeltab.com",
        "telefono": "+502 (842) 497-2186",
        "seccion": "c",
        "grado": "primero basico"
      },
      {
        "id": 12,
        "nombre": "Lilian Elvia",
        "apellido": "Daniel Gay",
        "correo": "elviagay@steeltab.com",
        "telefono": "+502 (925) 556-3005",
        "seccion": "c",
        "grado": "kinder"
      },
      {
        "id": 13,
        "nombre": "Lilly Vonda",
        "apellido": "Booth Stephenson",
        "correo": "vondastephenson@steeltab.com",
        "telefono": "+502 (947) 488-3388",
        "seccion": "c",
        "grado": "cuarto primaria"
      },
      {
        "id": 14,
        "nombre": "Boyd Glover",
        "apellido": "French Osborne",
        "correo": "gloverosborne@steeltab.com",
        "telefono": "+502 (861) 415-3179",
        "seccion": "unica",
        "grado": "cuarto bachillerato"
      },
      {
        "id": 15,
        "nombre": "Bonita Cabrera",
        "apellido": "Burns Russell",
        "correo": "cabrerarussell@steeltab.com",
        "telefono": "+502 (996) 400-2243",
        "seccion": "b",
        "grado": "tercero primaria"
      },
      {
        "id": 16,
        "nombre": "Darcy Luna",
        "apellido": "Mendez Hawkins",
        "correo": "lunahawkins@steeltab.com",
        "telefono": "+502 (848) 590-2237",
        "seccion": "c",
        "grado": "preparatoria"
      },
      {
        "id": 17,
        "nombre": "Schneider Sharon",
        "apellido": "Bray Kline",
        "correo": "sharonkline@steeltab.com",
        "telefono": "+502 (859) 534-2331",
        "seccion": "a",
        "grado": "quinto primaria"
      },
      {
        "id": 18,
        "nombre": "Adele Serena",
        "apellido": "Larson Berg",
        "correo": "serenaberg@steeltab.com",
        "telefono": "+502 (942) 540-2020",
        "seccion": "unica",
        "grado": "segundo primaria"
      },
      {
        "id": 19,
        "nombre": "Moreno Leonor",
        "apellido": "Beasley Wells",
        "correo": "leonorwells@steeltab.com",
        "telefono": "+502 (831) 561-2787",
        "seccion": "c",
        "grado": "segundo basico"
      },
      {
        "id": 20,
        "nombre": "Brigitte Garcia",
        "apellido": "Mclean Ball",
        "correo": "garciaball@steeltab.com",
        "telefono": "+502 (959) 575-2797",
        "seccion": "b",
        "grado": "quinto primaria"
      },
      {
        "id": 21,
        "nombre": "Cline Nicole",
        "apellido": "Lowe Barron",
        "correo": "nicolebarron@steeltab.com",
        "telefono": "+502 (847) 422-3011",
        "seccion": "c",
        "grado": "segundo primaria"
      },
      {
        "id": 22,
        "nombre": "Burns Holcomb",
        "apellido": "Morrison Spears",
        "correo": "holcombspears@steeltab.com",
        "telefono": "+502 (842) 486-3236",
        "seccion": "unica",
        "grado": "cuarto primaria"
      },
      {
        "id": 23,
        "nombre": "Fischer Tucker",
        "apellido": "Cortez Barr",
        "correo": "tuckerbarr@steeltab.com",
        "telefono": "+502 (922) 570-2457",
        "seccion": "b",
        "grado": "tercero primaria"
      },
      {
        "id": 24,
        "nombre": "Harmon Hunter",
        "apellido": "Emerson Randolph",
        "correo": "hunterrandolph@steeltab.com",
        "telefono": "+502 (802) 522-2594",
        "seccion": "c",
        "grado": "sexto primaria"
      },
      {
        "id": 25,
        "nombre": "Owen Liz",
        "apellido": "Cunningham Jarvis",
        "correo": "lizjarvis@steeltab.com",
        "telefono": "+502 (972) 422-3101",
        "seccion": "unica",
        "grado": "tercero basico"
      },
      {
        "id": 26,
        "nombre": "Weiss Greer",
        "apellido": "Wilson Skinner",
        "correo": "greerskinner@steeltab.com",
        "telefono": "+502 (883) 401-3470",
        "seccion": "unica",
        "grado": "sexto primaria"
      },
      {
        "id": 27,
        "nombre": "Robertson Mendoza",
        "apellido": "Ramos Holcomb",
        "correo": "mendozaholcomb@steeltab.com",
        "telefono": "+502 (937) 454-2793",
        "seccion": "b",
        "grado": "kinder"
      },
      {
        "id": 28,
        "nombre": "Neal Kent",
        "apellido": "Carr Hogan",
        "correo": "kenthogan@steeltab.com",
        "telefono": "+502 (940) 493-3834",
        "seccion": "a",
        "grado": "segundo basico"
      },
      {
        "id": 29,
        "nombre": "Francine Sheri",
        "apellido": "Jordan Anthony",
        "correo": "sherianthony@steeltab.com",
        "telefono": "+502 (979) 575-2593",
        "seccion": "b",
        "grado": "primero primaria"
      },
      {
        "id": 30,
        "nombre": "Sears Leona",
        "apellido": "Mcintyre Roy",
        "correo": "leonaroy@steeltab.com",
        "telefono": "+502 (956) 528-2880",
        "seccion": "c",
        "grado": "tercero basico"
      },
      {
        "id": 31,
        "nombre": "Cathleen Lorraine",
        "apellido": "Gilbert Cochran",
        "correo": "lorrainecochran@steeltab.com",
        "telefono": "+502 (800) 452-3132",
        "seccion": "c",
        "grado": "segundo basico"
      },
      {
        "id": 32,
        "nombre": "Bernard Franco",
        "apellido": "Harvey Villarreal",
        "correo": "francovillarreal@steeltab.com",
        "telefono": "+502 (920) 503-3282",
        "seccion": "unica",
        "grado": "sexto primaria"
      },
      {
        "id": 33,
        "nombre": "Glenna Langley",
        "apellido": "Barnett Oneill",
        "correo": "langleyoneill@steeltab.com",
        "telefono": "+502 (987) 593-3332",
        "seccion": "c",
        "grado": "kinder"
      }
    ]
  }
  gotoLogin(){
    this.router.navigate(['/Login']);
  }
  
}
