import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { References } from '../../interfaces/references.interface';
import { store } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  private referencesUrl = './assets/references.json';

  private selectItemsSource = new BehaviorSubject<References | null>(null);
  public selectItemsChanges$ = this.selectItemsSource.asObservable();

  constructor(private http: HttpClient) { }

  public getReferences(): void {
    /* if (this.references) {
      return of(this.references);
    } */

    this.http.get<References>(this.referencesUrl)
      .subscribe(
        data => {
          console.log('request', JSON.stringify(data));
          this.selectItemsSource.next(data);
        },
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private initializeReference(): References {
    // Return an initialized object
    return {
      select: [''],
      codes: {
        code2: 102,
        code3: [''],
      }
    };
  }
}
