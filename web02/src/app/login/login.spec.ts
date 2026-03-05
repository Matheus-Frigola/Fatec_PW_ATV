import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(){

    const usuario = this.formLogin.value;

    const userStorage = localStorage.getItem("usuario");

    if(userStorage){

      const user = JSON.parse(userStorage);

      if(usuario.email === user.email && usuario.senha === user.senha){
        alert("Login realizado com sucesso!");
        this.router.navigate(['/home']);
      }else{
        alert("Email ou senha inválidos");
      }

    }else{
      alert("Usuário não cadastrado");
    }

  }

}