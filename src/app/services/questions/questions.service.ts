import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Dropdown } from '../../interfaces/dropdown.interface';
import { ListQuestions } from '../../interfaces/questions.interface';
import { store } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  readonly URL_API_DROP = 'http://localhost:3000/api/drop-questions';
  readonly URL_API_QUESTIONS = 'http://localhost:3000/api/questions';
  readonly URL_API_DROP_FILTER = 'http://localhost:3000/api/questions/find';

  // Dropdown Questions
  // private dropItemsSource = new BehaviorSubject<Dropdown | null>(null);
  // public dropItemsChanges$ = this.dropItemsSource.asObservable();

  constructor(private http: HttpClient) { }

  //////////////////////////////////////////////
  // Consulta con mongo DROPDOWN QUESTIONS:
  // WITH STORE
  getQuestions() {
    return this.http.get(this.URL_API_DROP)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  postQuestionsFilter(body) {
    return this.http.post(this.URL_API_DROP_FILTER, body);
  }

  postQuestions(question: Dropdown) {
    return this.http.post(this.URL_API_DROP, question);
  }

  putQuestions(question: Dropdown) {
    // return this.http.put(this.URL_API_DROP + `/${question._id}`, question);
  }

  deleteQuestions(_id: string) {
    return this.http.delete(this.URL_API_DROP + `/${_id}`);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
