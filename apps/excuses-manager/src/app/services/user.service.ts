import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of } from 'rxjs';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<firebase.User | null> = this.auth.user;

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      map((res: UserCredential) => {
        return !!res.user;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }
}
