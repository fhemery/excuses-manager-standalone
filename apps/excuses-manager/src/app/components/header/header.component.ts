import { Component, EventEmitter, Input, Output } from '@angular/core';
import firebase from 'firebase/compat';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbarModule,
    TranslateModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    NgIf,
  ],
})
export class HeaderComponent {
  @Input() user: firebase.User | null = null;
  @Output() logout = new EventEmitter<void>();

  clickLogout() {
    this.logout.emit();
  }
}
