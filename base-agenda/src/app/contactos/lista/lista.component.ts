import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  sTitle: string;
  sEtiquetaBtn: string;
  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor() {
    this.outBorrarItem = new EventEmitter();
  }

  ngOnInit() {
    this.sTitle = 'Contacctor personales';
    this.sEtiquetaBtn = 'Eliminar';
  }

  deleteItem(i) {
    this.outBorrarItem.emit(i);
  }
}
