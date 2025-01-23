import { Component, OnInit  } from '@angular/core';
import { JournalService } from '../../../core/services/journal.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-journal-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [],
  templateUrl: './journal-list.component.html',
  styleUrl: './journal-list.component.css'
})
export class JournalListComponent implements OnInit {

  journals: any[] = [];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getJournalsData().subscribe(data => {
      console.log(this.journals = data.journals);
    });
  }

  


}

