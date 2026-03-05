import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    {path:"cadastro", component:Cadastro},
    {path:"fale", component:Contato},
    {path:"vitrine", component:Vitrine},
    {path:"", component:Vitrine}
];
