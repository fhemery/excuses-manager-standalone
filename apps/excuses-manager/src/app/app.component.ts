import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/header/header.component';
import { AsyncPipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { en } from './translations/en';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, AsyncPipe, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'excuses-manager';

  user$: Observable<firebase.User | null>;

  constructor(
    private readonly userService: UserService,
    private readonly translate: TranslateService
  ) {
    this.user$ = this.userService.user$;

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setTranslation('en', en);
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  onLogout() {
    this.userService.logout();
  }
}
