import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
    title: string;
    organization: string;
    location: string;
    period: string;
    description: string[];
    type: 'internship' | 'freelance';
}

@Component({
    selector: 'app-experience',
    imports: [CommonModule],
    template: `
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        
        <div class="timeline">
          <div *ngFor="let exp of experiences; let i = index" 
               class="timeline-item" 
               [class.left]="i % 2 === 0"
               [class.right]="i % 2 !== 0">
            <div class="timeline-content glass-card">
              <div class="timeline-badge" [class.internship]="exp.type === 'internship'" [class.freelance]="exp.type === 'freelance'">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              </div>
              <span class="period">{{ exp.period }}</span>
              <h3>{{ exp.title }}</h3>
              <h4>{{ exp.organization }}</h4>
              <p class="location">📍 {{ exp.location }}</p>
              <ul class="description">
                <li *ngFor="let item of exp.description">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .experience {
      background: var(--dark-bg);
    }
    
    .timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px 0;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: var(--gradient-1);
    }
    
    .timeline-item {
      margin-bottom: 50px;
      position: relative;
    }
    
    .timeline-content {
      width: calc(50% - 40px);
      padding: 30px;
      position: relative;
    }
    
    .timeline-item.left .timeline-content {
      margin-left: 0;
    }
    
    .timeline-item.right .timeline-content {
      margin-left: calc(50% + 40px);
    }
    
    .timeline-badge {
      position: absolute;
      top: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      z-index: 1;
    }
    
    .timeline-item.left .timeline-badge {
      right: -65px;
    }
    
    .timeline-item.right .timeline-badge {
      left: -65px;
    }
    
    .timeline-badge.internship {
      background: var(--gradient-1);
    }
    
    .timeline-badge.freelance {
      background: var(--gradient-2);
    }
    
    .period {
      display: inline-block;
      background: rgba(99, 102, 241, 0.2);
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      color: var(--primary-color);
      margin-bottom: 15px;
    }
    
    .timeline-content h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: var(--light-text);
    }
    
    .timeline-content h4 {
      font-size: 1.1rem;
      color: var(--primary-color);
      margin-bottom: 5px;
    }
    
    .location {
      color: var(--gray-text);
      margin-bottom: 15px;
    }
    
    .description {
      list-style: none;
      padding-left: 0;
    }
    
    .description li {
      color: var(--gray-text);
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
    }
    
    .description li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .timeline::before {
        left: 30px;
      }
      
      .timeline-content {
        width: calc(100% - 80px);
        margin-left: 80px !important;
      }
      
      .timeline-badge {
        left: 5px !important;
      }
    }
  `]
})
export class ExperienceComponent {
    experiences: Experience[] = [
        {
            title: '.NET Full Stack Intensive Training Program',
            organization: 'Information Technology Institution (ITI)',
            location: 'Aswan, Egypt',
            period: '07/2025 – 12/2025',
            description: [
                'Completed advanced courses in ASP.NET Core, MVC, Web API, Angular, Entity Framework, and SQL Server',
                'Hands-on projects integrating front-end and back-end development',
                'Built secure, scalable web applications using modern .NET technologies'
            ],
            type: 'internship'
        },
        {
            title: 'Software Development Web Fundamentals',
            organization: 'Information Technology Institution (ITI)',
            location: 'Aswan, Egypt',
            period: '03/2025 – 06/2025',
            description: [
                'Completed foundational courses in C#, OOP, Data Structures & Algorithms, SQL',
                'Learned Git version control, HTML, CSS, and JavaScript',
                'Built strong programming fundamentals for full-stack development'
            ],
            type: 'internship'
        },
        {
            title: 'WordPress E-Commerce Website',
            organization: 'Freelance Project',
            location: 'Remote',
            period: '2025',
            description: [
                'Completed a fast, responsive bilingual (Arabic-English) storefront using WordPress',
                'Designed an attractive front-end layout and imported products from Excel',
                'Delivered the project within 3 days, ensuring smooth performance and mobile responsiveness'
            ],
            type: 'freelance'
        },
        {
            title: 'Widget Design Modification',
            organization: 'Freelance Project',
            location: 'Remote',
            period: '2025',
            description: [
                'Refined WordPress widget layouts using HTML, CSS, and JavaScript',
                'Enhanced visual consistency and UI/UX',
                'Improved user experience through thoughtful design modifications'
            ],
            type: 'freelance'
        }
    ];
}
