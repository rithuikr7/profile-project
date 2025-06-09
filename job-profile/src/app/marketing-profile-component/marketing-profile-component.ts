import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TermsComponent } from '../terms-component/terms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketing-profile-component',
  imports: [MatIconModule, TermsComponent, CommonModule],
  templateUrl: './marketing-profile-component.html',
  styleUrl: './marketing-profile-component.css',
})
export class MarketingProfileComponent {
  user = {
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/rithuik-rajeev-06567795',
      github: 'https://github.com/rithuik',
      X: 'https://x.com/rithuik',
    },
  };

  termsVisible = false;
  scrolledDown = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolledDown = window.scrollY > 10;
  }

  showTerms() {
    this.termsVisible = true;
  }

  hideTerms() {
    this.termsVisible = false;
  }
}
