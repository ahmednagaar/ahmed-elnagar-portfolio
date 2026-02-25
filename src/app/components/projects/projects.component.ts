import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    template: `
    <section id="projects" class="section projects">
      <div class="container">
        <h2 class="section-title">Projects & Work</h2>
        
        <div class="projects-note glass-card">
          <p>
            Throughout my learning journey at ITI and freelancing work, I've completed numerous projects 
            demonstrating my skills in full-stack development, from e-commerce platforms to custom web applications.
          </p>
        </div>
        
        <div class="gallery">
          <div class="gallery-item glass-card">
            <div class="project-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3>E-Commerce Platform</h3>
            <p>Bilingual WordPress storefront with Excel integration</p>
            <div class="tech-stack">
              <span>WordPress</span>
              <span>PHP</span>
              <span>CSS</span>
            </div>
          </div>
          
          <div class="gallery-item glass-card">
            <div class="project-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Full-Stack Web Applications</h3>
            <p>Built with ASP.NET Core and Angular</p>
            <div class="tech-stack">
              <span>ASP.NET Core</span>
              <span>Angular</span>
              <span>SQL Server</span>
            </div>
          </div>
          
          <div class="gallery-item glass-card">
            <div class="project-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3>UI/UX Enhancements</h3>
            <p>Custom widget designs and responsive layouts</p>
            <div class="tech-stack">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .projects {
      background: var(--darker-bg);
    }
    
    .projects-note {
      max-width: 800px;
      margin: 0 auto 60px;
      padding: 30px;
      text-align: center;
    }
    
    .projects-note p {
      font-size: 1.1rem;
      color: var(--gray-text);
      line-height: 1.8;
      margin: 0;
    }
    
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .gallery-item {
      padding: 40px 30px;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .project-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 20px;
      background: var(--gradient-1);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .gallery-item h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--light-text);
    }
    
    .gallery-item p {
      color: var(--gray-text);
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    
    .tech-stack span {
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.3);
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.85rem;
      color: var(--primary-color);
    }
  `]
})
export class ProjectsComponent { }
