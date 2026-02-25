import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav class="nav" [class.scrolled]="isScrolled">
      <div class="container nav-inner">
        <a href="#home" class="logo" (click)="smoothScroll($event, 'home')">Ahmed <span>Elnagar</span></a>
        <ul class="nav-links" [class.open]="menuOpen">
          <li><a href="#home" [class.active]="activeSection==='home'" (click)="navClick($event, 'home')">Home</a></li>
          <li><a href="#about" [class.active]="activeSection==='about'" (click)="navClick($event, 'about')">About</a></li>
          <li><a href="#skills" [class.active]="activeSection==='skills'" (click)="navClick($event, 'skills')">Skills</a></li>
          <li><a href="#experience" [class.active]="activeSection==='experience'" (click)="navClick($event, 'experience')">Experience</a></li>
          <li><a href="#projects" [class.active]="activeSection==='projects'" (click)="navClick($event, 'projects')">Projects</a></li>
          <li><a href="#journey" [class.active]="activeSection==='journey'" (click)="navClick($event, 'journey')">Journey</a></li>
          <li><a href="#education" [class.active]="activeSection==='education'" (click)="navClick($event, 'education')">Education</a></li>
          <li><a href="#contact" class="nav-cta" (click)="navClick($event, 'contact')">Contact</a></li>
        </ul>
        <button class="hamburger" [class.open]="menuOpen" (click)="menuOpen=!menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;
  activeSection = 'home';
  private scrollHandler!: () => void;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;
    this.scrollHandler = () => {
      const sy = window.scrollY;
      this.isScrolled = sy > 60;
      // Active section
      const sections = document.querySelectorAll('section[id]');
      let cur = 'home';
      sections.forEach(s => {
        if (sy >= (s as HTMLElement).offsetTop - 120) cur = s.getAttribute('id') || 'home';
      });
      this.activeSection = cur;
    };
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    if (this.isBrowser) window.removeEventListener('scroll', this.scrollHandler);
  }

  navClick(e: Event, id: string) {
    e.preventDefault();
    this.menuOpen = false;
    this.smoothScroll(e, id);
  }

  smoothScroll(e: Event, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
