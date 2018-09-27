import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { References } from '../../interfaces/references.interface';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  private referencesUrl = './assets/references.json';
  private references: References[];

  private selectedItemSource = new BehaviorSubject<References | null>(null);
  selectedItemChanges$ = this.selectedItemSource.asObservable();

  constructor(private http: HttpClient) { }

  changeSelectedItem(selectedItem: References | null) {
    this.selectedItemSource.next(selectedItem);
  }

  getReferences(): Observable<References[]> {
    if (this.references) {
      return of(this.references);
    }

    return this.http.get<References[]>(this.referencesUrl)
      .pipe(
        tap(data => console.log('request', JSON.stringify(data))),
        tap(data => this.references = data),
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
        code3: 'AR'
      }
    };
  }
}
