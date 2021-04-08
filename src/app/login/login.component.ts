import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    this.formData = new FormGroup({
      'usuario': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(255)]),
    });
  }

  /**
   * PROPIEDADES
   */
   get usuario() { return this.formData.get('usuario'); }
   get password() { return this.formData.get('password'); }

   logear() {
    if(this.formData.value.usuario == "admin" && this.formData.value.password == "123"){

      //alert("usuario correcto");
      this.router.navigate(['/datosAlumnos']);

    }else{
      alert("Usuario o contraseña incorrecto.");
    }
    this.formData.reset()
  }
}
