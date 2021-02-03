import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { BuscaCursosComponent } from './busca-cursos/busca-cursos.component';

@NgModule({
  declarations: [
    CursosFormComponent, 
    CursosListaComponent, 
    BuscaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forChild()  
  ],
  exports:[
    CursosFormComponent, 
    CursosListaComponent,
    BuscaCursosComponent
  ]
})
export class CursosModule { }
