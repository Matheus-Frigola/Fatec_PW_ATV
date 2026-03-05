import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){

    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  cadastrar(){

    const usuario = this.formCadastro.value;

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Usuário cadastrado!");

    this.router.navigate(['/login']);
  }

}