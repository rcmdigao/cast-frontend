import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../categorias/categorias';
import { CategoriasService } from '../../categorias.service';
import { Cursos } from '../cursos';
import { CursosService } from '../../cursos.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {
  
  cursos: Cursos;
  /* Buscar na API de Categorias para popular o combobox */
  categorias: Categorias[] = [];
  /* Msg de sucesso */
  success: boolean = false;
  /* Msg de Erros */
  errors: String[];
  /* Atualizaçao */
  id: number;
  
  constructor(
    private categoriaService: CategoriasService, 
    private cursoService : CursosService,
    private router: Router,
    private activatedRoute: ActivatedRoute

    ) {
    this.cursos = new Cursos();
   }

  ngOnInit(): void {  
    /* Populando o Combo */
    this.categoriaService
      .getCategorias()
      .subscribe((resposta) => (this.categorias = resposta));
  }

onSubmit() {
  if (this.id) {
    this.cursoService.atualizar(this.cursos).subscribe(
      (response) => {
        this.success = true;
        this.errors = null;
        this.cursos = new Cursos();
      },
      (errorResponse) => {
        this.errors = ['Erro ao atualizar a categoria.'];
      }
    );
  } else {
    this.cursoService.salvar(this.cursos).subscribe(
      (response) => {
        this.success = true;
        this.errors = null;
        this.cursos = new Cursos();
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}


voltarListagem() {
  this.router.navigate(['/cursos-lista']);
}




}
