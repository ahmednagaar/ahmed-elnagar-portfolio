import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-education',
    imports: [CommonModule],
    template: `
    <section id="education" class="section education">
      <div class="container">
        <h2 class="section-title">Education</h2>
        
        <div class="education-content">
          <div class="education-card glass-card">
            <div class="education-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3>Bachelor's Degree in E-Commerce</h3>
            <h4>Aswan University</h4>
            <p class="period">September 2020 – June 2024</p>
            <p class="location">📍 Aswan, Egypt</p>
            <p class="description">
              Graduated in 2024 with a focus on Accounting and Business, providing a strong foundation 
              in business processes and digital commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .education {
      background: var(--dark-bg);
    }
    
    .education-content {
      max-width: 700px;
      margin: 0 auto;
    }
    
    .education-card {
      padding: 50px 40px;
      text-align: center;
    }
    
    .education-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 30px;
      background: var(--gradient-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .education-card h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: var(--light-text);
    }
    
    .education-card h4 {
      font-size: 1.3rem;
      color: var(--primary-color);
      margin-bottom: 15px;
    }
    
    .period {
      display: inline-block;
      background: rgba(99, 102, 241, 0.2);
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 0.95rem;
      color: var(--primary-color);
      margin-bottom: 10px;
    }
    
    .location {
      color: var(--gray-text);
      margin-bottom: 20px;
      font-size: 1rem;
    }
    
    .description {
      color: var(--gray-text);
      line-height: 1.8;
      font-size: 1.05rem;
    }
  `]
})
export class EducationComponent { }
