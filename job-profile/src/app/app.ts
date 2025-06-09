import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileComponent } from './profile-component/profile-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected title = 'job-profile';
}
