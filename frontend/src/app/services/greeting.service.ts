import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GreetingService {
  private greetingUrl = 'http://localhost:8080/api/greeting';

  constructor(private http: HttpClient) {}

  getGreeting(): Observable<string> {
    return this.http.get(this.greetingUrl, {responseType: 'text'});
  }
}
