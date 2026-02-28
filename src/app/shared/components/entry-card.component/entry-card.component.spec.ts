import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryCardComponent } from './entry-card.component';
import { ComponentRef } from '@angular/core';

describe('EntryCardComponent', () => {
  let component: EntryCardComponent;
  let fixture: ComponentFixture<EntryCardComponent>;
  let componentRef: ComponentRef<EntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EntryCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('Render_ValidInputs_ReturnsSuccess', () => {
    // Arrange
    componentRef.setInput('title', 'Ingeniero informático');
    componentRef.setInput('subtitle', 'Atrebo');
    componentRef.setInput('dateRange', 'agosto de 2024 - Present');
    componentRef.setInput('location', 'Sevilla, España');

    // Act
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Assert
    expect(compiled.querySelector('.title')?.textContent).toContain('Ingeniero informático');
    expect(compiled.querySelector('.subtitle')?.textContent).toContain('Atrebo');
    expect(compiled.querySelector('.date-badge')?.textContent).toContain('agosto de 2024 - Present');
    expect(compiled.querySelector('.location')?.textContent).toContain('Sevilla, España');
  });
});
