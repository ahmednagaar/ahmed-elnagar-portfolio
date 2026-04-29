import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  template: `
    <section id="certifications" class="certifications-section">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Credentials</span>
          <h2 class="section-title">Certifications</h2>
          <p class="section-desc" style="margin:0 auto">Professional certifications from intensive training programs.</p>
        </div>
        <div class="certs-grid">

          <div class="cert-card reveal" *ngFor="let cert of certifications">
            <div class="cert-ribbon" [style.background]="cert.color"></div>
            <div class="cert-header">
              <div class="cert-icon" [style.background]="cert.color">
                <i [class]="cert.icon"></i>
              </div>
              <div class="cert-badge">
                <i class="fas fa-certificate"></i> Certified
              </div>
            </div>
            <h3>{{cert.title}}</h3>
            <h4>{{cert.issuer}}</h4>
            <div class="cert-meta">
              <span class="cert-date"><i class="fas fa-calendar-alt"></i> {{cert.date}}</span>
              <span class="cert-duration"><i class="fas fa-clock"></i> {{cert.duration}}</span>
            </div>
            <ul class="cert-topics">
              <li *ngFor="let topic of cert.topics">{{topic}}</li>
            </ul>
            <div class="cert-footer">
              <span class="cert-id" *ngIf="cert.location"><i class="fas fa-map-marker-alt"></i> {{cert.location}}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent {
  certifications = [
    {
      title: '.NET Full Stack Intensive Training',
      issuer: 'Information Technology Institute (ITI)',
      date: 'July 2025 – December 2025',
      duration: '6 Months',
      icon: 'fas fa-code',
      color: 'linear-gradient(135deg, #6c63ff, #4f46e5)',
      location: 'Aswan, Egypt',
      topics: [
        'ASP.NET Core & MVC Architecture',
        'Web API & Entity Framework',
        'Angular & TypeScript',
        'SQL Server & Database Design',
        'Authentication & Authorization',
        'Full-Stack Project Development'
      ]
    },
    {
      title: 'Software Development Web Fundamentals',
      issuer: 'Information Technology Institute (ITI)',
      date: 'March 2025 – June 2025',
      duration: '4 Months',
      icon: 'fas fa-laptop-code',
      color: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
      location: 'Aswan, Egypt',
      topics: [
        'C# & Object-Oriented Programming',
        'Data Structures & Algorithms',
        'SQL & Database Fundamentals',
        'HTML, CSS & JavaScript',
        'Git Version Control',
        'Problem Solving Techniques'
      ]
    }
  ];
}
