import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
    category: string;
    items: string[];
}

@Component({
    selector: 'app-skills',
    imports: [CommonModule],
    template: `
    <section id="skills" class="section skills">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        
        <div class="skills-grid">
          <div *ngFor="let skillGroup of skills" class="skill-category glass-card">
            <div class="category-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>{{ skillGroup.category }}</h3>
            <div class="skill-tags">
              <span *ngFor="let skill of skillGroup.items" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .skills {
      background: var(--darker-bg);
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .skill-category {
      padding: 40px 30px;
      text-align: center;
    }
    
    .category-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 20px;
      background: var(--gradient-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .skill-category h3 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: var(--light-text);
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    
    .skill-tag {
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.3);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      color: var(--light-text);
      transition: all 0.3s ease;
    }
    
    .skill-tag:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }
  `]
})
export class SkillsComponent {
    skills: Skill[] = [
        {
            category: 'Backend Development',
            items: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'LINQ', 'C#']
        },
        {
            category: 'Frontend Development',
            items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind']
        },
        {
            category: 'Database & Tools',
            items: ['SQL Server', 'Database Design', 'Query Optimization', 'Git', 'GitHub', 'Visual Studio', 'VS Code']
        },
        {
            category: 'Concepts & Practices',
            items: ['OOP', 'MVC Pattern', 'RESTful APIs', 'Dependency Injection', 'Authentication', 'Agile Development']
        }
    ];
}
