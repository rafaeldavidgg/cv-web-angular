import { Component, input } from '@angular/core';

@Component({
  selector: 'app-entry-card',
  standalone: true,
  templateUrl: './entry-card.component.html',
  styleUrl: './entry-card.component.scss'
})
export class EntryCardComponent {
  // Entradas obligatorias
  public title = input.required<string>();
  public subtitle = input.required<string>();
  public dateRange = input.required<string>();

  // Entradas opcionales
  public location = input<string>();
  public description = input<string>();
}
