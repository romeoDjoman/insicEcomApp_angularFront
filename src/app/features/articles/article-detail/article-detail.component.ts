import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article-data-model';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  articleData: Article | undefined;
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService ) {}

  ngOnInit(){
    let articleId = this.activatedRoute.snapshot.paramMap.get('articleId');
    console.warn(articleId);
    articleId && this.articleService.getArticlesData().subscribe({
      next: (data) => {
        const article = data.articles.find((item) => item.id === articleId);
        console.warn(article);
        this.articleData = article;

      },
      error: (err) => {
        console.error('An error occurred: ', err.message);
      }
    });
    
    
  }
}