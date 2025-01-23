import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { ArticlesData, Article } from '../../../core/models/article-data-model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticlesData().subscribe((data) => {
      this.articles = data.articles;
    });
  }

  trackByTitle(index: number, article: Article): string {
    return article.title;
  }
}
