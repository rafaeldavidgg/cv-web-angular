import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PortfolioService } from './portfolio.service';
import { ProfileData } from '../models/profile.model';

describe('PortfolioService', () => {
  let service: PortfolioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PortfolioService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PortfolioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('loadProfileData_ValidJson_ReturnsSuccess', () => {
    // Arrange
    const mockProfileData: ProfileData = {
      name: 'Rafael David García Galocha',
      title: 'Software Engineer',
      location: 'Mairena del Alcor, Andalucía, España',
      summary: 'Resumen de prueba',
      skills: ['Desarrollo de software'],
      experience: [],
      education: [],
      certifications: []
    };

    // Act
    service.loadProfileData();

    // Assert
    const req = httpMock.expectOne('datamodel.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockProfileData);

    expect(service.profileData()).toEqual(mockProfileData);
  });
});
