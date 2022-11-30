import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcusesService } from '../../services/excuses.service';
import { Excuse } from '../../model/excuse';
import { FavoriteService } from '../../services/favorite.service';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ExcusesCardComponent } from './excuses-card.component';

@Component({
  selector: 'app-excuses-list',
  standalone: true,
  templateUrl: './excuses-list.component.html',
  styleUrls: ['./excuses-list.component.scss'],
  imports: [TranslateModule, AsyncPipe, ExcusesCardComponent, NgIf, NgForOf],
})
export class ExcusesListComponent {
  excuses$: Observable<Excuse[]>;
  selectedExcuse = '';

  constructor(
    private excusesService: ExcusesService,
    private readonly favoriteService: FavoriteService
  ) {
    this.excuses$ = this.excusesService.getRandom(6);
  }

  setFavorite(excuse: Excuse | null) {
    console.log('ExcusesCardComponent', 'setFavorite');
    if (!excuse) {
      return;
    }
    this.favoriteService.addFavorite(excuse).subscribe(() => {
      console.log('excuse added !');
    });
  }
}
