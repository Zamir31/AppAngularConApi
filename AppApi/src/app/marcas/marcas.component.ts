import { Component, OnInit } from '@angular/core';
import { IMarca } from '../Interfaces/IMarca';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  marcas: IMarca[]= [];
  // cargando : boolean = true;

  constructor (private marcasServicio : ProductosService){}

  ngOnInit(): void {
    this.marcasServicio.getMarcas().subscribe(data => {
      this.marcas = data;
      console.log(data);
      // this.cargando = false;
    })
  }
}
