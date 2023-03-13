import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IProducto } from './Interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlApi = 'https://desfrlopez.me/dnoriega/api/tbl_productos'

  constructor(private http: HttpClient) { }

  private HttpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getProductos(): Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.urlApi)
    .pipe(
    catchError(this.manejarError<IProducto[]>('getProductos',
    []))
    )
    }

    manejarError<T>(operacion = 'Operación', resultado?: T){
      return (error: any) : Observable<T> => {
      console.error(`La operación ${operacion} falló con el
      siguiente codigo de error: ${error.message}`);
      return of(resultado as T)
      }
      }
}
