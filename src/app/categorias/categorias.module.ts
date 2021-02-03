import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { FormsModule } from '@angular/forms';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';


@NgModule({
  declarations: [
    CategoriasFormComponent, 
    CategoriasListaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule
  ],
  exports:[
    CategoriasFormComponent,
    CategoriasListaComponent
  ]
})
export class CategoriasModule { }
