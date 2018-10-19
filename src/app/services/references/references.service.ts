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

  readonly URL_API = 'http://localhost:3000/api/my-practice';
  readonly URL_API_PAY = 'http://localhost:3000/api/payments';
  readonly URL_API_PAY_FILTER = 'http://localhost:3000/api/payments/find';

  // Form Reference
  // private selectItemsSource = new BehaviorSubject<References | null>(null);
  // public selectItemsChanges$ = this.selectItemsSource.asObservable();

  constructor(private http: HttpClient) { }

  ///////////////////////////////////////////////
  // Consulta con mongo FIRST FORM REFERENCE:
  // WITH STORE
  getReferences() {
    return this.http.get(this.URL_API)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  postPaymentsFilter(body) {
    return this.http.post(this.URL_API_PAY_FILTER, body); // Va a la BD de mongo
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
