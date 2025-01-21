export interface Author {
    name: string;
    affiliation: string;
    email: string;
  }
  
  export interface Reference {
    title: string;
    authors: string;
    journal: string;
    year: number;
    doi: string;
  }
  
  export interface Figure {
    caption: string;
    file: string;
  }
  
  export interface Journal {
    title: string;
    volume: number;
    issue: number;
    year: number;
    doi: string;
    publisher: string;
    issn: string;
    price: number;
  }
  
  export interface Article {
    id: string;
    title: string;
    abstract: string;
    keywords: string[];
    authors: Author[];
    journal: Journal;
    figures: Figure[];
    references: Reference[];
  }
  
  export interface ArticlesData {
    articles: Article[];
  }
  