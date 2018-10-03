import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { References } from '../../interfaces/references.interface';
import { ReferenceModel } from '../../models/reference';
import { store } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  private referencesUrl = './assets/references.json';
  readonly URL_API = 'http://localhost:3000/api/my-practice';

  public selectedReference = ReferenceModel;

  private selectItemsSource = new BehaviorSubject<References | null>(null);
  public selectItemsChanges$ = this.selectItemsSource.asObservable();

  constructor(private http: HttpClient) { }

  /* public getReferences(): void {
    /* if (this.references) {
      return of(this.references);
    } */

  /* this.http.get<References>(this.referencesUrl)
   .subscribe(
     data => {
       console.log('request', JSON.stringify(data));
       this.selectItemsSource.next(data);
     },
     catchError(this.handleError)
   );
}  */

  /////////////////////////////////////////////////////////////////////////////////////
  // Consulta con mongo:
  getReferences() {
    return this.http.get(this.URL_API);
  }

  postReference(Reference: ReferenceModel) {
    return this.http.post(this.URL_API, Reference);
  }

  putEmployee(Reference: ReferenceModel) {
    return this.http.put(this.URL_API + `/${Reference._id}`, Reference);
  }

  deleteEmployee(_id: string) {
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
      codes: {
        code2: 102
      },
      currency: ['']
    };
  }
}
