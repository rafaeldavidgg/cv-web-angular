import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { PortfolioService } from '../../core/services/portfolio.service';
import { signal } from '@angular/core';
import { ProfileData } from '../../core/models/profile.model';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  // Arrange global para inyectar un servicio simulado
  const mockPortfolioService = {
    profileData: signal<ProfileData | null>({
      name: 'Test Name',
      title: 'Test Title',
      location: 'Test Location',
      summary: 'Test Summary',
      skills: [],
      experience: [
        {
          company: 'Empresa Ficticia',
          role: 'Desarrollador de software',
          startDate: 'enero de 2024',
          endDate: 'junio de 2024',
          location: 'Sevilla'
        }
      ],
      education: [],
      certifications: []
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [
        { provide: PortfolioService, useValue: mockPortfolioService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
  });

  it('Render_ValidExperienceData_ReturnsSuccess', () => {
    // Arrange
    const compiled = fixture.nativeElement as HTMLElement;

    // Act
    fixture.detectChanges();

    // Assert
    const entryCards = compiled.querySelectorAll('app-entry-card');
    expect(entryCards.length).toBe(1);
    expect(compiled.textContent).toContain('Desarrollador de software');
    expect(compiled.textContent).toContain('Empresa Ficticia');
  });
});
