import { Component } from '@angular/core';
import {ContatoModel} from '../model/contato';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  public alerta:string="";
  public obj: ContatoModel = new ContatoModel();
  public enviar(){
    let json = JSON.stringify(this.obj);
    localStorage.setItem("meuContato", json);
    this.alerta = "Seu email foi enviado com sucesso!";
  }
}
