import { Routes } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';
import { EpiForm } from './epi/epi-form/epi-form';
import { Unauthorized } from './auth/unauthorized/unauthorized';
import { authGuard } from './auth/auth-guard';
import { Login } from './login/login';

export const routes: Routes = [
    // Rotas públicas
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'unauthorized', component: Unauthorized},

    // Rotas privadas
    { path: 'epi', component: EpiList, canActivate: [authGuard] },
    { path: 'epi/detalhe', component: EpiDetalhe, canActivate: [authGuard] },
    { path: 'epi/cadastro', component: EpiForm, canActivate: [authGuard] }
];


