import { Routes } from '@angular/router';
import { ConsultaSubstations } from './pages/consulta-substations/consulta-substations';
import { Inicial } from './pages/inicial/inicial';

export const routes: Routes = [
    { path: '', component: Inicial},
    { path: 'consulta-substations', component: ConsultaSubstations}
];
