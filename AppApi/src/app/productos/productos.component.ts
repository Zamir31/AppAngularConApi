import { Component, OnInit } from '@angular/core';
import { IProducto } from '../Interfaces/IProducto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: IProducto[]= [];
  // cargando : boolean = true;

  constructor (private productosServicio : ProductosService){}

  ngOnInit(): void {
    this.productosServicio.getProductos().subscribe(data => {
      this.productos = data;
      console.log(data);
      // this.cargando = false;
    })
  }

}
