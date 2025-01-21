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

export interface Table {
  caption: string;
  file: string;
}

export interface SupplementaryMaterial {
  title: string;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  authors: Author[];
  references: Reference[];
  figures: Figure[];
  tables: Table[];
  supplementary_material: SupplementaryMaterial[];
}

export interface Journal {
  id: string;
  title: string;
  volume: number;
  issue: number;
  year: number;
  doi: string;
  publisher: string;
  issn: string;
  price: number;
  article: Article;
}

export interface JournalsData {
  journals: Journal[];
}