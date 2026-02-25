import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-inner">
          <a href="#home" class="logo" (click)="scroll($event, 'home')">Ahmed <span>Elnagar</span></a>
          <div class="footer-links">
            <a href="#home" (click)="scroll($event, 'home')">Home</a>
            <a href="#about" (click)="scroll($event, 'about')">About</a>
            <a href="#skills" (click)="scroll($event, 'skills')">Skills</a>
            <a href="#experience" (click)="scroll($event, 'experience')">Experience</a>
            <a href="#projects" (click)="scroll($event, 'projects')">Projects</a>
            <a href="#contact" (click)="scroll($event, 'contact')">Contact</a>
          </div>
          <div class="footer-socials">
            <a href="https://linkedin.com/in/ahmed-elnagar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/ahmed-elnagar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="mailto:elnagarahmed031&#64;gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        <div class="footer-bottom">&copy; {{currentYear}} Ahmed Elnagar. All rights reserved. &mdash; Built with <i class="fas fa-heart" style="color:var(--accent-pink);font-size:.75rem"></i> passion.</div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  currentYear = 2025;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) this.currentYear = new Date().getFullYear();
  }

  scroll(e: Event, id: string) {
    e.preventDefault();
    if (!this.isBrowser) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
