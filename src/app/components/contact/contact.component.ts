import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Say Hello</span>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-desc" style="margin:0 auto">I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
        </div>
        <div class="contact-grid">
          <a (click)="copyEmail($event)" href="mailto:elnagarahmed031&#64;gmail.com" class="contact-card reveal">
            <div class="c-icon"><i class="fas fa-envelope"></i></div>
            <h3>Email</h3>
            <p>elnagarahmed031&#64;gmail.com</p>
          </a>
          <a href="https://linkedin.com/in/ahmed-elnagar" target="_blank" rel="noopener noreferrer" class="contact-card reveal">
            <div class="c-icon"><i class="fab fa-linkedin-in"></i></div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/ahmed-elnagar</p>
          </a>
          <a href="tel:+2001110439963" class="contact-card reveal">
            <div class="c-icon"><i class="fas fa-phone"></i></div>
            <h3>Phone</h3>
            <p>01110439963</p>
          </a>
          <div class="contact-card reveal">
            <div class="c-icon"><i class="fas fa-map-marker-alt"></i></div>
            <h3>Location</h3>
            <p>Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  private appComponent: AppComponent;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object, appComponent: AppComponent) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.appComponent = appComponent;
  }

  copyEmail(e: Event) {
    e.preventDefault();
    if (!this.isBrowser) return;
    const email = 'elnagarahmed031@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.appComponent.showToast('Email copied to clipboard!');
    }).catch(() => {
      window.location.href = 'mailto:' + email;
    });
  }
}
