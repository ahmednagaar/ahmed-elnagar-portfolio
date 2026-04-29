import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Say Hello</span>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-desc" style="margin:0 auto">I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
        </div>

        <div class="contact-layout">
          <!-- Contact Info Cards -->
          <div class="contact-info">
            <a (click)="copyEmail($event)" href="mailto:elnagarahmed031&#64;gmail.com" class="contact-card reveal">
              <div class="c-icon"><i class="fas fa-envelope"></i></div>
              <h3>Email</h3>
              <p>elnagarahmed031&#64;gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-elnagar-78642228a/" target="_blank" rel="noopener noreferrer" class="contact-card reveal">
              <div class="c-icon"><i class="fab fa-linkedin-in"></i></div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/ahmed-elnagar-78642228a</p>
            </a>
            <a href="tel:+201110439963" class="contact-card reveal">
              <div class="c-icon"><i class="fas fa-phone"></i></div>
              <h3>Phone</h3>
              <p>+20 111 043 9963</p>
            </a>
            <a href="https://wa.me/201110439963" target="_blank" rel="noopener noreferrer" class="contact-card reveal">
              <div class="c-icon"><i class="fab fa-whatsapp"></i></div>
              <h3>WhatsApp</h3>
              <p>Chat with me</p>
            </a>
            <div class="contact-card reveal">
              <div class="c-icon"><i class="fas fa-map-marker-alt"></i></div>
              <h3>Location</h3>
              <p>Cairo, Egypt</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrap reveal">
            <form class="contact-form" (ngSubmit)="onSubmit()" *ngIf="!submitted">
              <div class="form-header">
                <h3><i class="fas fa-paper-plane"></i> Send me a message</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" [(ngModel)]="formData.name" placeholder="Your name" required autocomplete="name">
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" [(ngModel)]="formData.email" placeholder="your@email.com" required autocomplete="email">
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" [(ngModel)]="formData.subject" placeholder="Project inquiry, collaboration, etc.">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" [(ngModel)]="formData.message" placeholder="Tell me about your project or idea..." rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-submit" [disabled]="sending">
                <i class="fas" [ngClass]="sending ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i>
                <span>{{ sending ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>
            <div class="form-success" *ngIf="submitted">
              <div class="success-icon"><i class="fas fa-check-circle"></i></div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <button class="btn btn-outline" (click)="resetForm()"><i class="fas fa-redo"></i> Send Another</button>
            </div>
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

  formData = { name: '', email: '', subject: '', message: '' };
  sending = false;
  submitted = false;

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

  onSubmit() {
    if (!this.isBrowser || this.sending) return;
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.appComponent.showToast('Please fill in all required fields');
      return;
    }

    this.sending = true;

    // Send via mailto as a reliable fallback (works without any API key)
    const subject = encodeURIComponent(this.formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
    );

    // Open mailto link
    window.open(`mailto:elnagarahmed031@gmail.com?subject=${subject}&body=${body}`, '_self');

    // Show success after brief delay
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.appComponent.showToast('Opening your email client...');
    }, 800);
  }

  resetForm() {
    this.formData = { name: '', email: '', subject: '', message: '' };
    this.submitted = false;
  }
}
