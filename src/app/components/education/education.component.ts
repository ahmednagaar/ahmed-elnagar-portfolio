import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  template: `
    <section id="education">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Academic</span>
          <h2 class="section-title">Education</h2>
        </div>
        <div class="edu-card reveal">
          <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
          <h3>Bachelor's Degree in E-Commerce</h3>
          <h4>Aswan University</h4>
          <span class="edu-period">September 2020 – June 2024</span>
          <p class="loc">📍 Aswan, Egypt</p>
          <p class="desc">Graduated in 2024 with a focus on Accounting and Business, providing a strong foundation in business processes and digital commerce.</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class EducationComponent { }
