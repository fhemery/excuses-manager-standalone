import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageComponent } from './favorites-page.component';
import { FavoriteService } from '../../services/favorite.service';
import { of } from 'rxjs';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;
  let favoriteService: FavoriteService;

  beforeEach(async () => {
    favoriteService = {
      getFavorites: () => of([]),
    } as unknown as FavoriteService;
    await TestBed.configureTestingModule({
      declarations: [FavoritesPageComponent],
      providers: [
        {
          provide: FavoriteService,
          useValue: favoriteService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
