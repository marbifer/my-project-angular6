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

  referencesCode: References[];
  errorMessage: string;
  selectedItem: References | null;
  sub: Subscription;

  constructor(public _referencesService: ReferencesService) { }

  ngOnInit() {
    this.sub = this._referencesService.selectedItemChanges$.subscribe(
      selectedItem => this.selectedItem = selectedItem
    );

    this._referencesService.getReferences().subscribe(
      (references: References[]) => {
        this.referencesCode = references;
        console.log('references', references);
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
