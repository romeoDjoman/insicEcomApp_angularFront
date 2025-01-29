import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article-data-model';
import { CartService } from '../../../core/services/cart.service';
import { CartItem } from '../../../core/models/cart-data-model';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  articleData: Article | undefined;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private articleService: ArticleService,
    private cartService: CartService
  ) {}

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

  onAddToCart(article: Article) {
    // Adapter l'article au format CartItem
    const cartItem: CartItem = {
      productId: parseInt(article.id, 10),  // Article ID (assurez-vous que c'est un nombre)
      productName: article.title,  // Nom de l'article
      quantity: 1,  // Par défaut, la quantité est 1
      price: article.journal.price,  // Le prix provient du journal associé à l'article
      total: article.journal.price,  // Total pour cet article, ici c'est simplement price * quantity
      image: '',  // Vous pouvez ajouter un champ image si nécessaire
      type: 'article',  // Type 'article', mais cela peut être dynamique selon le type d'article
    };
  
    this.cartService.addToCart(cartItem);
  }
  
}