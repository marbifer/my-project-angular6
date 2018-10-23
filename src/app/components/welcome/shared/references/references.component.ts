import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

/* Interfaces */
import { References } from '../../../../interfaces/references.interface';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  @ViewChild(NgForm) saveForm: NgForm;
  @Input() fieldCode: References;
  @Input() referencesCode: References;
  @Input() currentSelection: string;
  @Input() currencySelection: string;
  @Input() selectable: boolean;
  @Input() errorMessage: boolean;
  @Input() addNumbersLength: number;
  @Output() searchRef = new EventEmitter<any>();
  @Output() addNumber = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  searchReference(form: NgForm) {
    console.log('SEARCH', form.value);
    this.searchRef.emit(form.value);
  }

  mostrarSeleccionAntesDeAgregar() {
    console.log('Lo seleccionado actualmente en el input de referencia: ', this.currentSelection);
    console.log('Lo seleccionado actualmente en el input de Currency: ', this.currencySelection);
  }

  addNumbers(form: NgForm) {
    this.addNumber.emit(form.value);
  }

}
