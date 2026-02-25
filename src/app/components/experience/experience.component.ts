import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  template: `
    <section class="experience" id="experience">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Career</span>
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="timeline">
          <div class="tl-item reveal">
            <div class="tl-dot"></div>
            <div class="tl-card">
              <span class="tl-period internship">07/2025 – 12/2025</span>
              <h3>.NET Full Stack Intensive Training</h3>
              <h4>Information Technology Institution (ITI)</h4>
              <p class="loc">📍 Aswan, Egypt</p>
              <ul>
                <li>Advanced courses in ASP.NET Core, MVC, Web API, Angular, Entity Framework, SQL Server</li>
                <li>Hands-on projects integrating front-end and back-end development</li>
                <li>Built secure, scalable web applications using modern .NET technologies</li>
              </ul>
            </div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-dot"></div>
            <div class="tl-card">
              <span class="tl-period internship">03/2025 – 06/2025</span>
              <h3>Software Development Web Fundamentals</h3>
              <h4>Information Technology Institution (ITI)</h4>
              <p class="loc">📍 Aswan, Egypt</p>
              <ul>
                <li>Foundational courses in C#, OOP, Data Structures &amp; Algorithms, SQL</li>
                <li>Learned Git version control, HTML, CSS, and JavaScript</li>
                <li>Built strong programming fundamentals for full-stack development</li>
              </ul>
            </div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-dot"></div>
            <div class="tl-card">
              <span class="tl-period freelance">2025</span>
              <h3>WordPress E-Commerce Website</h3>
              <h4>Freelance Project</h4>
              <p class="loc">📍 Remote</p>
              <ul>
                <li>Fast, responsive bilingual (Arabic-English) storefront using WordPress</li>
                <li>Designed attractive front-end layout, imported products from Excel</li>
                <li>Delivered within 3 days with smooth performance and mobile responsiveness</li>
              </ul>
            </div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-dot"></div>
            <div class="tl-card">
              <span class="tl-period freelance">2025</span>
              <h3>Widget Design Modification</h3>
              <h4>Freelance Project</h4>
              <p class="loc">📍 Remote</p>
              <ul>
                <li>Refined WordPress widget layouts using HTML, CSS, and JavaScript</li>
                <li>Enhanced visual consistency and UI/UX</li>
                <li>Improved user experience through thoughtful design modifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceComponent { }
