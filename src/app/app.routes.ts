import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Cadastro } from './cadastro/cadastro';
import { Vitrine } from './vitrine/vitrine';


export const routes: Routes = [
    {path:"cadastro", component:Cadastro},
    {path:"fale", component:Contato},
    {path:"Vitrine", component:Vitrine},
    {path:"", component:Vitrine}

];
