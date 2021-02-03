import { Categorias } from "../categorias/categorias";

export class Cursos{
  id:number;
  descricao:string;
  dataInicio:string;
  dataTermino:string;
  qtdAlunos: number;
  valor: string;
  categoria: Categorias;
}