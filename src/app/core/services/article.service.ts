import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesData, Article } from '../models/article-data-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'assets/data/article-data.json';

  constructor(private http: HttpClient) { }

  getArticlesData(): Observable<ArticlesData> {
    return this.http.get<ArticlesData>(this.apiUrl);
  }

  getArticleById(id: string): Observable<Article | undefined> {
    return this.http.get<ArticlesData>(`${this.apiUrl}/${id}`).pipe(
      map((data) => data.articles.find((item) => item.id === id))
    );
  }
}
