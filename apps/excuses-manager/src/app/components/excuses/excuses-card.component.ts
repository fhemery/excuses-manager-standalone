import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Excuse } from '../../model/excuse';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-excuses-card',
  standalone: true,
  templateUrl: './excuses-card.component.html',
  styleUrls: ['./excuses-card.component.scss'],
  imports: [MatCardModule, MatIconModule],
})
export class ExcusesCardComponent {
  @Input() excuse: Excuse | null = null;

  @Output() favorite = new EventEmitter<Excuse | null>();

  addFavorite() {
    console.log('ExcusesCardComponent', 'addFavorite');
    this.favorite.emit(this.excuse);
  }
}
