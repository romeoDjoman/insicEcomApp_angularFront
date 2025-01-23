import { Injectable } from '@angular/core';
import { JournalsData } from '../models/journal-data-model';
import { Observable, of } from 'rxjs';  // Import 'of' to return the data directly
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private apiUrl = 'assets/data/journal-data.json';

  constructor(private http: HttpClient) { }

  getJournalsData(): Observable<JournalsData> {
    return this.http.get<JournalsData>(this.apiUrl);
  }

  getJournalById(id: string): Observable<any> {
    return this.http.get<JournalsData>(`${this.apiUrl}/${id}`).pipe(
      map((data) => data.journals.find((item) => item.id === id)));
  }

}
