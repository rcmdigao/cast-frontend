import { Component, OnInit } from '@angular/core';
import { Categorias } from '../categorias';
import { CategoriasService } from '../../categorias.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css'],
})
export class CategoriasFormComponent implements OnInit {
  categoria: Categorias;
  /* Msg de sucesso */
  success: boolean = false;
  /* Msg de Erros */
  errors: String[];
  /* Atualizaçao */
  id: number;

  constructor(
    private service: CategoriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoria = new Categorias();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getCategoriaById(this.id).subscribe(
          (response) => (this.categoria = response),
          (errorResponse) => (this.categoria = new Categorias())
        );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.categoria).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.categoria = new Categorias();
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar a categoria.'];
        }
      );
    } else {
      this.service.salvar(this.categoria).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.categoria = new Categorias();
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
    }
  }

  voltarListagem() {
    this.router.navigate(['/categorias-lista']);
  }

}
