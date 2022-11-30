import { Injectable } from '@angular/core';
import { Excuse } from '../model/excuse';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { from, Observable, switchMap, take } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(
    private readonly afs: AngularFirestore,
    private readonly userService: UserService
  ) {}

  addFavorite(excuse: Excuse): Observable<DocumentReference<Excuse>> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        return from(
          this.afs
            .collection<Excuse>(`favorites/${user?.uid}/excuses`)
            .add(excuse)
        );
      }),
      take(1)
    );
  }

  getFavorites(): Observable<Excuse[]> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        return this.afs
          .collection<Excuse>(`favorites/${user?.uid}/excuses`)
          .valueChanges();
      })
    );
  }
}
