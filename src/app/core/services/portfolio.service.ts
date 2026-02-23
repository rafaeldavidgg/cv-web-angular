import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileData } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly http = inject(HttpClient);

  public readonly profileData = signal<ProfileData | null>(null);

  public loadProfileData(): void {
    this.http.get<ProfileData>('datamodel.json').subscribe({
      next: (data: ProfileData) => {
        this.profileData.set(data);
      },
      error: (error: unknown) => {
        console.error('Error al cargar la información del perfil', error);
      }
    });
  }
}
