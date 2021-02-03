import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasFormComponent} from './categorias-form/categorias-form.component'
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';


const routes: Routes = [
  /* Formulario de categoria */
  {path: 'categorias-form', component: CategoriasFormComponent},
  /* Formulario de categoria de edição */
  {path: 'categorias-form/:id', component: CategoriasFormComponent},
  /* Listagem */
  {path: 'categorias-lista', component: CategoriasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
