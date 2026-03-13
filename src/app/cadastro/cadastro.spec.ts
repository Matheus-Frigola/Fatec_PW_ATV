import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {

  cliente: Cliente = new Cliente();

  salvar() {

    // pega clientes já cadastrados
    let clientes = localStorage.getItem("clientes");

    let lista = [];

    if(clientes != null){
      lista = JSON.parse(clientes);
    }

    // adiciona cliente novo
    lista.push(this.cliente);

    // salva novamente no localStorage
    localStorage.setItem("clientes", JSON.stringify(lista));

    alert("Cliente cadastrado com sucesso!");

    // limpa formulário
    this.cliente = new Cliente();
  }

}