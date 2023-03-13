import { Component, Input } from '@angular/core';
import { IProducto } from '../Interfaces/IProducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto?: IProducto;
}
