import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  template: `
    <section class="journey" id="journey">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:16px">
          <span class="section-label"><span class="line"></span> My Story</span>
          <h2 class="section-title">The Journey</h2>
          <p class="section-desc" style="margin:0 auto">Snapshots from my intensive training at ITI — moments of dedication, teamwork, and hands-on learning.</p>
        </div>
        <div class="journey-grid">
          <div class="gallery-item featured reveal" *ngFor="let img of images; let i = index"
               [class.featured]="i === 0" (click)="openLightbox(i)">
            <img [src]="img.src" [alt]="img.alt" loading="lazy">
            <div class="g-overlay"><span>{{img.label}}</span></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class JourneyComponent {
  images = [
    { src: 'assets/images/gallery/IMG_0554 (1).jpg', alt: 'Training at ITI', label: 'Training Session' },
    { src: 'assets/images/gallery/IMG_0644 (1).jpg', alt: 'Teamwork at ITI', label: 'Teamwork' },
    { src: 'assets/images/gallery/IMG_0653.jpg', alt: 'Coding session', label: 'Coding' },
    { src: 'assets/images/gallery/IMG_0695.jpg', alt: 'Working on project', label: 'Project Work' },
    { src: 'assets/images/gallery/IMG_0720.jpg', alt: 'Building skills', label: 'Skill Building' },
    { src: 'assets/images/gallery/IMG_0893.jpg', alt: 'Workshop session', label: 'Workshop' },
    { src: 'assets/images/gallery/IMG_0947.jpg', alt: 'Development work', label: 'Development' },
    { src: 'assets/images/gallery/IMG_1070 (1).jpg', alt: 'Deep focus coding', label: 'Deep Focus' },
    { src: 'assets/images/gallery/IMG_1146.jpg', alt: 'Achievement moment', label: 'Achievement' },
  ];

  private appComponent: AppComponent;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  openLightbox(index: number) {
    if (!isPlatformBrowser(this.platformId)) return;
    const srcs = this.images.map(img => img.src);
    this.appComponent.openLightbox(srcs, index);
  }
}
