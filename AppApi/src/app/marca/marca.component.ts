import { Component, Input } from '@angular/core';
import { IMarca } from '../Interfaces/IMarca';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent {
  @Input() marca?: IMarca;
}
