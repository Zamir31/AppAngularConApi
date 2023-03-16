import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IProducto } from './Interfaces/IProducto';
import { IMarca } from './Interfaces/IMarca';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlApi = 'https://desfrlopez.me/dnoriega/api/tbl_productos'
  private urlApiMarcas = 'https://desfrlopez.me/dnoriega/api/tbl_marcas'

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

      getMarcas(): Observable<IMarca[]>{
        return this.http.get<IMarca[]>(this.urlApiMarcas)
        .pipe(
        catchError(this.manejarError2<IMarca[]>('getMarcas',
        []))
        )
        }
    
        manejarError2<T>(operacion = 'Operación', resultado?: T){
          return (error: any) : Observable<T> => {
          console.error(`La operación ${operacion} falló con el
          siguiente codigo de error: ${error.message}`);
          return of(resultado as T)
          }
          }
}
