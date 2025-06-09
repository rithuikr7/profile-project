import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class TermsComponent {
  @Output() back = new EventEmitter<void>();

  backToMain() {
    this.back.emit();
  }
}
