import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly afs: AngularFirestore) {}

  get(userId: string): Observable<{ name: string } | undefined> {
    return this.afs.doc<{ name: string }>(`profiles/${userId}`).valueChanges();
  }
}
