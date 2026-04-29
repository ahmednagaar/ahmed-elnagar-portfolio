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
          <li><a href="#freelancing" [class.active]="activeSection==='freelancing'" (click)="navClick($event, 'freelancing')">Freelancing</a></li>
          <li><a href="#certifications" [class.active]="activeSection==='certifications'" (click)="navClick($event, 'certifications')">Certifications</a></li>
          <li><a href="#contact" class="nav-cta" (click)="navClick($event, 'contact')">Contact</a></li>
        </ul>
        <div style="display:flex;align-items:center;gap:8px">
          <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <i [class]="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          <button class="hamburger" [class.open]="menuOpen" (click)="menuOpen=!menuOpen" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;
  activeSection = 'home';
  isDark = true;
  private scrollHandler!: () => void;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    // Load saved theme
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') {
      this.isDark = false;
      document.body.classList.add('light-theme');
    }

    this.scrollHandler = () => {
      const sy = window.scrollY;
      this.isScrolled = sy > 60;
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

  toggleTheme() {
    if (!this.isBrowser) return;
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
    }
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
