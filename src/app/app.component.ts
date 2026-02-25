import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { JourneyComponent } from './components/journey/journey.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    JourneyComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- PRELOADER -->
    <div class="preloader" id="preloader" [class.done]="preloaderDone">
      <div class="preloader-inner">
        <div class="preloader-spinner"></div>
        <div class="preloader-text">Loading</div>
      </div>
    </div>

    <!-- SCROLL PROGRESS -->
    <div class="scroll-progress" [style.width.%]="scrollProgress"></div>

    <!-- CURSOR GLOW -->
    <div class="cursor-glow" [class.active]="cursorActive" [style.left.px]="cursorX" [style.top.px]="cursorY"></div>

    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-experience></app-experience>
    <app-projects></app-projects>
    <app-journey></app-journey>
    <app-education></app-education>
    <app-contact></app-contact>
    <app-footer></app-footer>

    <!-- LIGHTBOX -->
    <div class="lightbox" [class.open]="lightboxOpen" (click)="onLightboxBgClick($event)">
      <button class="lightbox-close" (click)="closeLightbox()"><i class="fas fa-times"></i></button>
      <button class="lightbox-nav lightbox-prev" (click)="prevLightbox()"><i class="fas fa-chevron-left"></i></button>
      <button class="lightbox-nav lightbox-next" (click)="nextLightbox()"><i class="fas fa-chevron-right"></i></button>
      <img [src]="lightboxSrc" alt="Gallery Image">
      <div class="lightbox-counter">{{lightboxIndex + 1}} / {{lightboxImages.length}}</div>
    </div>

    <!-- BACK TO TOP -->
    <button class="back-to-top" [class.show]="showBackToTop" (click)="scrollToTop()" aria-label="Back to top">
      <i class="fas fa-arrow-up"></i>
    </button>

    <!-- TOAST -->
    <div class="toast" [class.show]="toastVisible">
      <i class="fas fa-check-circle"></i> <span>{{toastMessage}}</span>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Ahmed Elnagar - Portfolio';

  preloaderDone = false;
  scrollProgress = 0;
  cursorActive = false;
  cursorX = 0;
  cursorY = 0;
  showBackToTop = false;

  // Lightbox
  lightboxOpen = false;
  lightboxSrc = '';
  lightboxIndex = 0;
  lightboxImages: string[] = [];

  // Toast
  toastVisible = false;
  toastMessage = 'Copied!';

  private scrollTicking = false;
  private isBrowser: boolean;
  private mouseMoveHandler!: (e: MouseEvent) => void;
  private scrollHandler!: () => void;
  private keydownHandler!: (e: KeyboardEvent) => void;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    // Preloader
    setTimeout(() => this.preloaderDone = true, 400);

    // Scroll handler
    this.scrollHandler = () => {
      if (!this.scrollTicking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY;
          const h = document.documentElement.scrollHeight - window.innerHeight;
          this.scrollProgress = h > 0 ? (sy / h) * 100 : 0;
          this.showBackToTop = sy > 600;
          this.scrollTicking = false;
        });
        this.scrollTicking = true;
      }
    };
    window.addEventListener('scroll', this.scrollHandler);

    // Cursor glow
    this.mouseMoveHandler = (e: MouseEvent) => {
      if (!this.cursorActive) this.cursorActive = true;
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    };
    window.addEventListener('mousemove', this.mouseMoveHandler);

    // Lightbox keyboard
    this.keydownHandler = (e: KeyboardEvent) => {
      if (!this.lightboxOpen) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight') this.nextLightbox();
      if (e.key === 'ArrowLeft') this.prevLightbox();
    };
    document.addEventListener('keydown', this.keydownHandler);

    // Reveal on scroll observer
    setTimeout(() => this.initRevealObserver(), 100);
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('keydown', this.keydownHandler);
  }

  private initRevealObserver() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Lightbox
  openLightbox(images: string[], index: number) {
    this.lightboxImages = images;
    this.lightboxIndex = index;
    this.lightboxSrc = images[index];
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  nextLightbox() {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length;
    this.lightboxSrc = this.lightboxImages[this.lightboxIndex];
  }

  prevLightbox() {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length;
    this.lightboxSrc = this.lightboxImages[this.lightboxIndex];
  }

  onLightboxBgClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }

  // Toast
  showToast(message: string) {
    this.toastMessage = message;
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 2500);
  }
}
