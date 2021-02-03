import { Injectable } from '@angular/core';
import { Categorias } from './categorias/categorias';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {

  /* Importando a URL */
  apiUrl: String = environment.apiUrlBase + '/cast/api/categorias';

  constructor(private http: HttpClient) {}

  /* Listagem */
  getCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.apiUrl}`);
  }

  /* Cadastro */
  salvar(categoria: Categorias): Observable<Categorias> {
    return this.http.post<Categorias>(`${this.apiUrl}`,
      categoria
    );
  }

  /* Busca por id */
  getCategoriaById(id:number): Observable<Categorias> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /* Update */
  atualizar(categoria: Categorias): Observable<Categorias> {
    return this.http.put<Categorias>(`${this.apiUrl}/${categoria.id}`, categoria);
  }

  /* Excluir */
  deletar(categoria:Categorias): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${categoria.id}`);
  }

  
}
