import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import {BuscaCursosComponent } from './busca-cursos/busca-cursos.component'

const routes: Routes = [
    /* Formulario de categoria */
    {path: 'cursos-form', component: CursosFormComponent},
    /* Formulario de categoria */
    {path: 'cursos-lista', component: CursosListaComponent},
    /* Busca */
    {path: 'busca-cursos', component: BuscaCursosComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
