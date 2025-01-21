import { Component, OnInit  } from '@angular/core';
import { JournalService } from '../../../core/services/journal.service';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JournalsData } from '../../../core/models/journal-data-model';


@Component({
  selector: 'app-journal-list',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './journal-list.component.html',
  styleUrl: './journal-list.component.css'
})
export class JournalListComponent implements OnInit {

  journals: any[] = [];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getJournalsData().subscribe(data => {
      this.journals = data.journals;
    });
  }

  


}

