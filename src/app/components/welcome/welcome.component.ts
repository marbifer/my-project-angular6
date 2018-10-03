import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { References } from '../../interfaces/references.interface';
import { ReferencesService } from '../../services/service.index';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  public referencesCode: References;
  private currentSelection: string;
  private addNumbersLength: number;
  public errorMessage: string;

  public currencyCode: References;
  private currencySelection: string;
  private selectable = false;
  private sub: Subscription;

  @ViewChild(NgForm) saveForm: NgForm;

  constructor(public _referencesService: ReferencesService) { }

  ngOnInit() {

    this.currentSelection = '';
    this.currencySelection = '';

    this.sub = this._referencesService.selectItemsChanges$.subscribe(
      selectItems => {
        console.log('testtttt', selectItems);
        this.referencesCode = selectItems;
        this.currencyCode = selectItems;
      }
    );

    this._referencesService.getReferences();
  }

  mostrarSeleccionAntesDeAgregar() {
    console.log('Lo seleccionado actualmente en el input de referencia: ', this.currentSelection);
    console.log('Lo seleccionado actualmente en el input de Currency: ', this.currencySelection);
  }

  addNumbers() {
    const numbers = this.saveForm.controls['number1'].value;
    console.log('numbers: ', numbers);
    this.addNumbersLength = numbers.length;
    console.log('characters: ', this.addNumbersLength);
    if (this.addNumbersLength === 9) {
      this.selectable = true;
    } else {
      this.selectable = false;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
