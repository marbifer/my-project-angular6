import { Component, OnInit, OnDestroy } from '@angular/core';
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

  referencesCode: References;
  errorMessage: string;
  sub: Subscription;

  constructor(public _referencesService: ReferencesService) { }

  ngOnInit() {
    this.sub = this._referencesService.selectItemsChanges$.subscribe(
      selectItems => {
        console.log('testtttt', selectItems);
        this.referencesCode = selectItems;
      }
    );

    this._referencesService.getReferences();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
