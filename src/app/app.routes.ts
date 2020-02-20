import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AgenciasComponent } from './components/agencias/agencias.component';
import { AgenciaComponent } from './components/agencia/agencia.component';
import { FormularioComponent } from './components/formulario/formulario.component';



const APP_ROUTES: Routes = [
    { path: 'agencias', component: AgenciasComponent },
    { path: 'formulario/:i', component: FormularioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'AgenciasComponent' },
];


// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true } );
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

