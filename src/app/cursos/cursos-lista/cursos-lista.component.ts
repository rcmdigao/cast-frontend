import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/cursos.service';
import { Cursos } from '../cursos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})

export class CursosListaComponent implements OnInit {

  cursos: Cursos[] = [];
  cursoSelecionado: Cursos;
  msgSucesso : string;
  msgErro: string;
  constructor(
    private service: CursosService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.service
    .getCursos()
    .subscribe((resposta) => (this.cursos = resposta));
  }


  novoCadastro(){
    this.router.navigate(['/cursos-form'])
  }

/* Preparando o clique do modal */
preparaDelecao(cursos:Cursos){
  this.cursoSelecionado = cursos;
  }
  
  
  deletarCategoria(){
    this.service
    .deletar(this.cursoSelecionado)
    .subscribe(
      response => {
        this.msgSucesso = 'Curso excluido com sucesso!'
        this.ngOnInit();
        },
      erro => this.msgErro = 'Ocorreu um erro ao excluir o Curso.'
    )
    
  }


}
