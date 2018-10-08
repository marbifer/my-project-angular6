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
  private dropItemsSource = new BehaviorSubject<Dropdown | null>(null);
  public dropItemsChanges$ = this.dropItemsSource.asObservable();

  // Table Questions
  private rowsSource = new BehaviorSubject<ListQuestions | null>(null);
  public rowsChanges$ = this.rowsSource.asObservable();

  constructor(private http: HttpClient) { }

  /////////////////////////////////////////////////////////////////////////////////////
  // Consulta con mongo DROPDOWN QUESTIONS:
  getQuestions() {
    this.http.get(this.URL_API_DROP).subscribe(
      response => {
        console.log('request DROPDOWN QUESTIONS', JSON.stringify(response[0]));
        this.dropItemsSource.next(response[0]);
      },
      catchError(this.handleError)
    );
  }

  postQuestionsFilter(body) {
    this.http.post(this.URL_API_DROP_FILTER, body).subscribe(
      response => {
        this.rowsSource.next(response[0]);
      });
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

  //////////////////////////////////////////////////////////////////////////////////////////

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private initializeDropdown(): Dropdown {
    // Return an initialized object
    return {
      categories: ['']
    };
  }
}
