import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="hero-orb o1"></div>
        <div class="hero-orb o2"></div>
        <div class="hero-orb o3"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-badge"><i class="fas fa-circle"></i> Available for Opportunities</div>
        <h1><span class="gradient">Ahmed Elnagar</span></h1>
        <p class="hero-role" [innerHTML]="typingHtml"></p>
        <p class="hero-sub">Specializing in <strong>.NET</strong> &amp; <strong>Angular</strong> — Building secure,
          scalable web applications with clean, efficient code and seamless integration.</p>
        <div class="hero-btns">
          <a href="#contact" class="btn btn-primary" (click)="scroll($event, 'contact')"><i class="fas fa-paper-plane"></i> Get In Touch</a>
          <a href="#projects" class="btn btn-outline" (click)="scroll($event, 'projects')"><i class="fas fa-eye"></i> View Projects</a>
          <a href="#" class="btn btn-download" title="Download Resume"><i class="fas fa-download"></i> <span>Download CV</span></a>
        </div>
        <div class="hero-socials">
          <a href="https://linkedin.com/in/ahmed-elnagar" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/ahmed-elnagar" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="mailto:elnagarahmed031&#64;gmail.com" class="social-icon" aria-label="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div class="scroll-hint"><span>Scroll</span><div class="line"></div></div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements OnInit {
  typingHtml = 'Full-Stack Developer<span class="typing-cursor"></span>';
  private roles = ['Full-Stack Developer', 'ASP.NET Developer', 'Angular Developer', 'Problem Solver'];
  private rIdx = 0;
  private cIdx = 0;
  private deleting = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;
    // Parallax orbs
    window.addEventListener('mousemove', (e) => {
      const orbs = document.querySelectorAll('.hero-orb');
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const s = (i + 1) * 12;
        (orb as HTMLElement).style.transform = `translate(${x * s}px,${y * s}px)`;
      });
    });

    // Start typing after delay
    this.cIdx = this.roles[0].length;
    setTimeout(() => {
      this.deleting = true;
      setTimeout(() => this.type(), 2000);
    }, 1500);
  }

  private type() {
    const current = this.roles[this.rIdx];
    if (!this.deleting) {
      this.cIdx++;
      if (this.cIdx > current.length) {
        setTimeout(() => { this.deleting = true; this.type(); }, 2000);
        return;
      }
    } else {
      this.cIdx--;
      if (this.cIdx < 0) {
        this.cIdx = 0;
        this.deleting = false;
        this.rIdx = (this.rIdx + 1) % this.roles.length;
        setTimeout(() => this.type(), 400);
        return;
      }
    }
    this.typingHtml = current.substring(0, this.cIdx) + '<span class="typing-cursor"></span>';
    setTimeout(() => this.type(), this.deleting ? 40 : 80);
  }

  scroll(e: Event, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
