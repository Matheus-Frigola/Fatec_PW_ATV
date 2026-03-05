import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
    public alerta:String = "";

    public enviar(){
      this.alerta = "Seu email foi enviado com sucesso !";
    }
}
