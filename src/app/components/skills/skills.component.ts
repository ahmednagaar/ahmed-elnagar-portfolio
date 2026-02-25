import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  template: `
    <section id="skills">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Expertise</span>
          <h2 class="section-title">Skills &amp; Technologies</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-card reveal">
            <div class="skill-icon backend"><i class="fas fa-server"></i></div>
            <h3>Backend Development</h3>
            <div class="skill-tags">
              <span class="skill-tag">ASP.NET Core</span><span class="skill-tag">ASP.NET MVC</span>
              <span class="skill-tag">Web API</span><span class="skill-tag">Entity Framework</span>
              <span class="skill-tag">LINQ</span><span class="skill-tag">C#</span>
            </div>
          </div>
          <div class="skill-card reveal">
            <div class="skill-icon frontend"><i class="fas fa-palette"></i></div>
            <h3>Frontend Development</h3>
            <div class="skill-tags">
              <span class="skill-tag">Angular</span><span class="skill-tag">TypeScript</span>
              <span class="skill-tag">JavaScript</span><span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span><span class="skill-tag">Bootstrap</span>
              <span class="skill-tag">Tailwind</span>
            </div>
          </div>
          <div class="skill-card reveal">
            <div class="skill-icon database"><i class="fas fa-database"></i></div>
            <h3>Database &amp; Tools</h3>
            <div class="skill-tags">
              <span class="skill-tag">SQL Server</span><span class="skill-tag">Database Design</span>
              <span class="skill-tag">Query Optimization</span><span class="skill-tag">Git</span>
              <span class="skill-tag">GitHub</span><span class="skill-tag">Visual Studio</span>
              <span class="skill-tag">VS Code</span>
            </div>
          </div>
          <div class="skill-card reveal">
            <div class="skill-icon concepts"><i class="fas fa-lightbulb"></i></div>
            <h3>Concepts &amp; Practices</h3>
            <div class="skill-tags">
              <span class="skill-tag">OOP</span><span class="skill-tag">MVC Pattern</span>
              <span class="skill-tag">RESTful APIs</span><span class="skill-tag">Dependency Injection</span>
              <span class="skill-tag">Authentication</span><span class="skill-tag">Agile</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH MARQUEE -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <div class="marquee-item"><i class="fab fa-microsoft"></i> ASP.NET Core</div>
        <div class="marquee-item"><i class="fab fa-angular"></i> Angular</div>
        <div class="marquee-item"><i class="fas fa-code"></i> C#</div>
        <div class="marquee-item"><i class="fab fa-js"></i> TypeScript</div>
        <div class="marquee-item"><i class="fas fa-database"></i> SQL Server</div>
        <div class="marquee-item"><i class="fab fa-git-alt"></i> Git</div>
        <div class="marquee-item"><i class="fab fa-html5"></i> HTML5</div>
        <div class="marquee-item"><i class="fab fa-css3-alt"></i> CSS3</div>
        <div class="marquee-item"><i class="fab fa-bootstrap"></i> Bootstrap</div>
        <div class="marquee-item"><i class="fas fa-cogs"></i> RESTful APIs</div>
        <div class="marquee-item"><i class="fas fa-shield-alt"></i> Authentication</div>
        <div class="marquee-item"><i class="fas fa-project-diagram"></i> MVC Pattern</div>
        <!-- duplicate for seamless loop -->
        <div class="marquee-item"><i class="fab fa-microsoft"></i> ASP.NET Core</div>
        <div class="marquee-item"><i class="fab fa-angular"></i> Angular</div>
        <div class="marquee-item"><i class="fas fa-code"></i> C#</div>
        <div class="marquee-item"><i class="fab fa-js"></i> TypeScript</div>
        <div class="marquee-item"><i class="fas fa-database"></i> SQL Server</div>
        <div class="marquee-item"><i class="fab fa-git-alt"></i> Git</div>
        <div class="marquee-item"><i class="fab fa-html5"></i> HTML5</div>
        <div class="marquee-item"><i class="fab fa-css3-alt"></i> CSS3</div>
        <div class="marquee-item"><i class="fab fa-bootstrap"></i> Bootstrap</div>
        <div class="marquee-item"><i class="fas fa-cogs"></i> RESTful APIs</div>
        <div class="marquee-item"><i class="fas fa-shield-alt"></i> Authentication</div>
        <div class="marquee-item"><i class="fas fa-project-diagram"></i> MVC Pattern</div>
      </div>
    </div>
  `,
  styles: []
})
export class SkillsComponent { }
