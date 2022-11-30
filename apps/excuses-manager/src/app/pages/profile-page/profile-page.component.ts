import { Component } from '@angular/core';
import { ProfilePageModel } from '../../model/profile-page-model';
import { Observable } from 'rxjs';
import { ProfilePageService } from './profile-page.service';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  imports: [TranslateModule, AsyncPipe, NgIf],
})
export class ProfilePageComponent {
  profile$: Observable<ProfilePageModel | null> = this.profilePageService.get();

  constructor(private readonly profilePageService: ProfilePageService) {}
}
