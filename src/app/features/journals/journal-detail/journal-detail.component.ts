import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../../../core/services/journal.service';
import { Journal } from '../../../core/models/article-data-model';

@Component({
  selector: 'app-journal-detail',
  standalone: true,
  imports: [],
  templateUrl: './journal-detail.component.html',
  styleUrl: './journal-detail.component.css'
})
export class JournalDetailComponent implements OnInit {
  journalData: Journal | undefined;
  constructor(private activatedRoute: ActivatedRoute, private journalService: JournalService) { }

  ngOnInit() {
    let journalId = this.activatedRoute.snapshot.paramMap.get('journalId');
    console.warn(journalId);
    journalId && this.journalService.getJournalsData().subscribe({
      next: (data) => {
        const journal = data.journals.find((item) => item.id === journalId);
        console.warn(journal);
        this.journalData = journal;
      },
      error: (err) => {
        console.error('An error occurred: ', err.message)
      }

    });
  }
}
