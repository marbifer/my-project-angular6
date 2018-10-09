import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { References } from '../../interfaces/references.interface';
import { List } from '../../interfaces/list.interface';
import { store } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  // private referencesUrl = './assets/references.json';
  readonly URL_API = 'http://localhost:3000/api/my-practice';
  readonly URL_API_PAY = 'http://localhost:3000/api/payments';
  readonly URL_API_PAY_FILTER = 'http://localhost:3000/api/payments/find';

  // public selectedReference: any;
  // private referenceArray: ReferenceModel[];

  // Form Reference
  private selectItemsSource = new BehaviorSubject<References | null>(null);
  public selectItemsChanges$ = this.selectItemsSource.asObservable();

  // Table Payments
  // private rowsSource = new BehaviorSubject<List | null>(null);
  // public rowsChanges$ = this.rowsSource.asObservable();

  constructor(private http: HttpClient) { }

  /////////////////////////////////////////////////////////////////////////////////////
  // Consulta con mongo FIRST FORM REFERENCE:
  getReferences() {
    this.http.get(this.URL_API).subscribe(
      response => {
        console.log('request FORM REFERENCE', JSON.stringify(response[0]));
        this.selectItemsSource.next(response[0]);
      },
      catchError(this.handleError)
    );
  }

  postPaymentsFilter(body) {
    return this.http.post(this.URL_API_PAY_FILTER, body);
  }

  postReference(reference: References) {
    return this.http.post(this.URL_API, reference);
  }

  putReference(reference: References) {
    // return this.http.put(this.URL_API + `/${reference._id}`, reference);
  }

  deleteReference(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  //////////////////////////////////////////////////////////////////////////////////////////

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private initializeReference(): References {
    // Return an initialized object
    return {
      select: [''],
      code: {
        code2: null
      },
      currency: ['']
    };
  }
}
