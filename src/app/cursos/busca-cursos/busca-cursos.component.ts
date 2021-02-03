import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../cursos.service'
import { Cursos } from '../cursos';
import { BuscaCurso } from './buscacurso';

@Component({
  selector: 'app-busca-cursos',
  templateUrl: './busca-cursos.component.html',
  styleUrls: ['./busca-cursos.component.css']
})
export class BuscaCursosComponent implements OnInit {
  descricao:string;
  lista : Cursos[];
  message: string;

  constructor(
    private service: CursosService
    ) {}

  ngOnInit(): void {
  }


  consultar(){
    this.service
      .getCursosPorNome(this.descricao)
      .subscribe(response => {
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
  }
    
    
  

}
