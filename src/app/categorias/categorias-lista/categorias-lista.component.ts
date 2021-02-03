import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias.service';
import { Categorias } from '../categorias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.css'],
})
export class CategoriasListaComponent implements OnInit {
  categoria: Categorias[] = [];
  categoriaSelecionada: Categorias;

  msgSucesso : string;
  msgErro: string;

  constructor(
    private service: CategoriasService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service
      .getCategorias()
      .subscribe((resposta) => (this.categoria = resposta));
  }


novoCadastro(){
  this.router.navigate(['/categorias-form'])
}

/* Preparando o clique do modal */
preparaDelecao(categoria:Categorias){
this.categoriaSelecionada = categoria;
}


deletarCategoria(){
  this.service
  .deletar(this.categoriaSelecionada)
  .subscribe(
    response => {
      this.msgSucesso = 'Categoria excluida com sucesso!'
      this.ngOnInit();
      },
    erro => this.msgErro = 'Ocorreu um erro ao excluir a categoria.'
  )
  
}


}
