import { Injectable } from '@angular/core';
import { Cursos } from './cursos/cursos';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from  '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  /* Importando a URL */
  apiUrl: String = environment.apiUrlBase + '/cast/api/cursos';

  constructor(private http:HttpClient) { }

  salvar(cursos:Cursos): Observable<Cursos>{
    return this.http.post<Cursos>(`${this.apiUrl}`, cursos);
  }

  /* Update */
  atualizar(cursos: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(`${this.apiUrl}/${cursos.id}`, cursos);
  }

    /* Listagem */
    getCursos(): Observable<Cursos[]> {
      return this.http.get<Cursos[]>(`${this.apiUrl}`);
    }

  /* Excluir */
  deletar(cursos:Cursos): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${cursos.id}`);
  }

    /* Listagem por curso */
    getCursosPorNome(descricao:string): Observable<Cursos[]> {

      const httpParams = new HttpParams().set("descricao", descricao);

      if (!descricao) {
        descricao = "";
      }

      httpParams.set("descricao", descricao);

      const url = this.apiUrl + "?" + httpParams.toString();
      console.log(url);
      
       return this.http.get<any>(url);
    }

}
