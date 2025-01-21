import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JournalListComponent } from '../../../features/journals/journal-list/journal-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    JournalListComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  

}
