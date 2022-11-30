import { Route } from '@angular/router';
import { UnloggedUsersOnlyGuard } from './services/unlogged-users-only.guard';
import { LoggedUsersOnlyGuard } from './services/logged-users-only.guard';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.routes').then(
        (m) => m.loginPageRoutes
      ),
    canActivate: [UnloggedUsersOnlyGuard],
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  { path: '', component: HomePageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
