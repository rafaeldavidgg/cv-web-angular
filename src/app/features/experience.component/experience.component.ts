import { Component, inject, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { EntryCardComponent } from '../../shared/components/entry-card.component/entry-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [EntryCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  private readonly portfolioService = inject(PortfolioService);

  // Senal computada para extraer solo la experiencia de los datos globales
  public experienceList = computed(() => {
    const data = this.portfolioService.profileData();
    return data ? data.experience : [];
  });
}
