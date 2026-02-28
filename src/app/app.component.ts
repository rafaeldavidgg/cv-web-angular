import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from './core/services/portfolio.service';
import { ExperienceComponent } from './features/experience.component/experience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  public ngOnInit(): void {
    this.portfolioService.loadProfileData();
  }
}
