import { Component, OnDestroy } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Excuse } from '../../model/excuse';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ExcusesCardComponent } from '../../components/excuses/excuses-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
  imports: [ExcusesCardComponent, AsyncPipe, NgForOf],
})
export class FavoritesPageComponent implements OnDestroy {
  favoritesExcuses$: Observable<Excuse[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private readonly favoritesService: FavoriteService) {
    this.favoritesExcuses$ = this.favoritesService
      .getFavorites()
      .pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
