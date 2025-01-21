import { Injectable } from '@angular/core';
import { JournalsData } from '../models/journal-data-model';
import { of } from 'rxjs';  // Import 'of' to return the data directly

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private journalsData: JournalsData = {
    "journals": [
      {
        "id": "123456789",
        "title": "Journal of Advanced Research in Artificial Intelligence",
        "volume": 25,
        "issue": 4,
        "year": 2025,
        "doi": "10.1016/j.jarai.2025.01.021",
        "publisher": "Elsevier",
        "issn": "2345-6789",
        "price": 49.99,
        "article": {
          "id": "987654321",
          "title": "A Novel Approach to Neural Network Optimization",
          "abstract": "This paper explores a new method for optimizing neural networks by introducing novel techniques for weight initialization and regularization. The results show significant improvements in training efficiency and model accuracy in various machine learning tasks.",
          "keywords": [
            "neural networks",
            "optimization",
            "machine learning",
            "deep learning",
            "regularization"
          ],
          "authors": [
            {
              "name": "Dr. Jane Doe",
              "affiliation": "Department of Computer Science, University of Technology",
              "email": "jane.doe@unitech.edu"
            },
            {
              "name": "Dr. John Smith",
              "affiliation": "Institute of Artificial Intelligence, TechnoLabs",
              "email": "john.smith@technolabs.com"
            }
          ],
          "references": [
            {
              "title": "Introduction to Machine Learning",
              "authors": "Author A, Author B",
              "journal": "Journal of Machine Learning Research",
              "year": 2020,
              "doi": "10.5555/jmlr.2020.12345"
            }
          ],
          "figures": [
            {
              "caption": "Figure 1: Neural network architecture",
              "file": "figure1.png"
            }
          ],
          "tables": [
            {
              "caption": "Table 1: Model evaluation metrics",
              "file": "table1.csv"
            }
          ],
          "supplementary_material": [
            {
              "title": "Code repository for experiments",
              "url": "https://github.com/repo/ai-optimization"
            }
          ]
        }
      },
      {
        "id": "987654320",
        "title": "International Journal of Data Science",
        "volume": 15,
        "issue": 2,
        "year": 2024,
        "doi": "10.1016/j.ijdatasci.2024.02.015",
        "publisher": "Springer",
        "issn": "1234-5678",
        "price": 39.99,
        "article": {
          "id": "876543210",
          "title": "Exploring Big Data Analytics for Healthcare",
          "abstract": "This paper examines the applications of big data analytics in the healthcare industry, focusing on predictive models and data-driven decision-making processes.",
          "keywords": [
            "big data",
            "healthcare",
            "analytics",
            "predictive modeling"
          ],
          "authors": [
            {
              "name": "Dr. Emily White",
              "affiliation": "Department of Health Informatics, HealthTech University",
              "email": "emily.white@healthtech.edu"
            }
          ],
          "references": [
            {
              "title": "Big Data in Healthcare: A Survey",
              "authors": "Author X, Author Y",
              "journal": "Journal of Healthcare Technology",
              "year": 2021,
              "doi": "10.5555/jht.2021.67890"
            }
          ],
          "figures": [
            {
              "caption": "Figure 1: Healthcare data analysis pipeline",
              "file": "figure1.png"
            }
          ],
          "tables": [
            {
              "caption": "Table 1: Data set features",
              "file": "table1.csv"
            }
          ],
          "supplementary_material": [
            {
              "title": "Healthcare Data Set",
              "url": "https://dataset.com/healthcare"
            }
          ]
        }
      },
      {
        "id": "112233445",
        "title": "Journal of Environmental Sustainability",
        "volume": 30,
        "issue": 1,
        "year": 2025,
        "doi": "10.1016/j.jes.2025.01.010",
        "publisher": "Wiley",
        "issn": "9876-5432",
        "price": 59.99,
        "article": {
          "id": "443322110",
          "title": "Renewable Energy Solutions for Sustainable Development",
          "abstract": "The paper discusses renewable energy sources and their role in promoting sustainable development in urban and rural environments.",
          "keywords": [
            "renewable energy",
            "sustainability",
            "development",
            "green energy"
          ],
          "authors": [
            {
              "name": "Dr. Mark Green",
              "affiliation": "Institute of Environmental Science, GreenTech University",
              "email": "mark.green@greentech.edu"
            }
          ],
          "references": [
            {
              "title": "Renewable Energy: Global Trends and Challenges",
              "authors": "Author P, Author Q",
              "journal": "Global Energy Review",
              "year": 2020,
              "doi": "10.5555/ger.2020.22334"
            }
          ],
          "figures": [
            {
              "caption": "Figure 1: Wind turbine power output",
              "file": "figure1.png"
            }
          ],
          "tables": [
            {
              "caption": "Table 1: Energy sources comparison",
              "file": "table1.csv"
            }
          ],
          "supplementary_material": [
            {
              "title": "Wind energy model",
              "url": "https://github.com/green/energy-model"
            }
          ]
        }
      },
      {
        "id": "556677889",
        "title": "Journal of Biotechnology and Genetics",
        "volume": 18,
        "issue": 3,
        "year": 2024,
        "doi": "10.1016/j.jbg.2024.05.022",
        "publisher": "Academic Press",
        "issn": "1122-3344",
        "price": 79.99,
        "article": {
          "id": "667788990",
          "title": "Genomic Editing in Agriculture: A Path to Food Security",
          "abstract": "This article reviews the current trends in genomic editing techniques used in agriculture to enhance crop yields and ensure food security.",
          "keywords": [
            "genomic editing",
            "agriculture",
            "CRISPR",
            "food security"
          ],
          "authors": [
            {
              "name": "Dr. Lisa Brown",
              "affiliation": "Department of Agricultural Biotechnology, BioTech University",
              "email": "lisa.brown@biotech.edu"
            }
          ],
          "references": [
            {
              "title": "CRISPR and its Application in Agriculture",
              "authors": "Author F, Author G",
              "journal": "Biotechnology Advances",
              "year": 2023,
              "doi": "10.5555/ba.2023.99876"
            }
          ],
          "figures": [
            {
              "caption": "Figure 1: CRISPR gene editing in crops",
              "file": "figure1.png"
            }
          ],
          "tables": [
            {
              "caption": "Table 1: Gene edited crops",
              "file": "table1.csv"
            }
          ],
          "supplementary_material": [
            {
              "title": "Gene Editing Tools in Agriculture",
              "url": "https://github.com/biotech/crispr-agriculture"
            }
          ]
        }
      },
      {
        "id": "998877665",
        "title": "Global Journal of Astrophysics",
        "volume": 12,
        "issue": 2,
        "year": 2025,
        "doi": "10.1016/j.gja.2025.06.001",
        "publisher": "Nature Publishing Group",
        "issn": "4455-6677",
        "price": 89.99,
        "article": {
          "id": "556677443",
          "title": "Exploring the Dark Matter Mystery",
          "abstract": "This paper discusses the ongoing research into dark matter, its properties, and potential implications for the universe's expansion.",
          "keywords": [
            "dark matter",
            "astrophysics",
            "cosmology",
            "universe"
          ],
          "authors": [
            {
              "name": "Dr. Charles Black",
              "affiliation": "Department of Astrophysics, StarLabs University",
              "email": "charles.black@starlabs.edu"
            }
          ],
          "references": [
            {
              "title": "Dark Matter and Its Role in Cosmology",
              "authors": "Author H, Author I",
              "journal": "Astrophysical Journal",
              "year": 2022,
              "doi": "10.5555/aj.2022.12121"
            }
          ],
          "figures": [
            {
              "caption": "Figure 1: Dark matter detection methods",
              "file": "figure1.png"
            }
          ],
          "tables": [
            {
              "caption": "Table 1: Observational data of dark matter",
              "file": "table1.csv"
            }
          ],
          "supplementary_material": [
            {
              "title": "Dark Matter Simulation Model",
              "url": "https://github.com/astrophysics/darkmatter-simulation"
            }
          ]
        }
      }
    ]
  };

  constructor() { }

  getJournalsData() {
    return of(this.journalsData);  // Return the data directly as an observable
  }

}
