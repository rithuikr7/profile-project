import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileComponent } from './profile-component/profile-component';
import { CommonModule } from '@angular/common';
import { MarketingProfileComponent } from './marketing-profile-component/marketing-profile-component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    ProfileComponent,
    CommonModule,
    MarketingProfileComponent,
    MatIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected title = 'job-profile';
}
