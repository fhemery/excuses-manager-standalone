import { Component } from '@angular/core';
import { ExcusesListComponent } from '../../components/excuses/excuses-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [ExcusesListComponent],
})
export class HomePageComponent {}
