import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container nav-container">
        <div class="logo">
          <span class="logo-text">Ahmed</span>
          <span class="logo-accent">Elnagar</span>
        </div>
        
        <button class="mobile-toggle" (click)="toggleMobile()" [class.active]="mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul class="nav-links" [class.mobile-open]="mobileMenuOpen">
          <li><a href="#home" (click)="closeMobile()">Home</a></li>
          <li><a href="#about" (click)="closeMobile()">About</a></li>
          <li><a href="#skills" (click)="closeMobile()">Skills</a></li>
          <li><a href="#experience" (click)="closeMobile()">Experience</a></li>
          <li><a href="#projects" (click)="closeMobile()">Projects</a></li>
          <li><a href="#education" (click)="closeMobile()">Education</a></li>
          <li><a href="#journey" (click)="closeMobile()">Journey</a></li>
          <li><a href="#contact" (click)="closeMobile()" class="btn btn-primary">Contact</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
      background: transparent;
    }
    
    .navbar.scrolled {
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      padding: 15px 0;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .logo-text {
      color: var(--light-text);
    }
    
    .logo-accent {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      gap: 30px;
      align-items: center;
    }
    
    .nav-links a {
      color: var(--light-text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }
    
    .nav-links a:not(.btn)::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    .nav-links a:not(.btn):hover::after {
      width: 100%;
    }
    
    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 5px;
    }
    
    .mobile-toggle span {
      width: 25px;
      height: 3px;
      background: var(--light-text);
      transition: all 0.3s ease;
      border-radius: 2px;
    }
    
    .mobile-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }
    
    .mobile-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    
    @media (max-width: 768px) {
      .mobile-toggle {
        display: flex;
      }
      
      .nav-links {
        position: fixed;
        top: 70px;
        right: -100%;
        flex-direction: column;
        background: rgba(15, 23, 42, 0.98);
        backdrop-filter: blur(10px);
        width: 250px;
        padding: 30px;
        border-radius: 10px 0 0 10px;
        transition: right 0.3s ease;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
      }
      
      .nav-links.mobile-open {
        right: 0;
      }
      
      .nav-links li {
        width: 100%;
      }
      
      .nav-links a {
        display: block;
        padding: 10px 0;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobile() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobile() {
    this.mobileMenuOpen = false;
  }
}
