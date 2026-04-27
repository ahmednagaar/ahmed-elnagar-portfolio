import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Portfolio</span>
          <h2 class="section-title">Projects &amp; Work</h2>
          <p class="section-desc" style="margin:0 auto">Throughout my journey at ITI and freelancing, I've built projects demonstrating full-stack development skills.</p>
        </div>
        <div class="projects-grid projects-grid--featured">

          <!-- Nafes Platform -->
          <div class="project-card project-card--featured reveal">
            <div class="project-img">
              <img src="assets/images/gallery/nafes-platform.png" alt="Nafes Platform — Interactive E-Learning" loading="lazy">
              <div class="overlay">
                <a href="https://smartshcool-front.vercel.app/" target="_blank" rel="noopener noreferrer" class="overlay-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
              </div>
            </div>
            <div class="project-body">
              <div class="project-meta">
                <span class="project-badge project-badge--client"><i class="fas fa-briefcase"></i> Client Project</span>
                <span class="project-period">Feb 2026 – Mar 2026</span>
              </div>
              <h3>Nafes — Interactive E-Learning Platform</h3>
              <p>A complete interactive English learning platform built for Arabic-speaking students, featuring a gamified assessment system that replaces traditional text questions with custom-built educational games. The platform includes a live competitive leaderboard, a comprehensive admin dashboard, detailed analytics, and a dedicated parent monitoring portal.</p>
              <ul class="project-features">
                <li>4 Educational Games: Drag &amp; Drop, Matching, Spin the Wheel, Flip Cards</li>
                <li>Live Leaderboard — calculates points and answer speed in real time</li>
                <li>Admin Dashboard with JWT authentication — manage tests, games, and users</li>
                <li>Advanced analytics with charts showing correct answer rates and difficulty levels</li>
                <li>Parent portal for monitoring student performance per subject</li>
                <li>Fully responsive with Arabic RTL support and dark mode</li>
              </ul>
              <div class="project-tags">
                <span>Angular</span><span>ASP.NET Core</span><span>C#</span><span>SQL</span><span>JWT Auth</span><span>RTL</span><span>Full-Stack</span>
              </div>
              <a href="https://smartshcool-front.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fas fa-arrow-right"></i> View Live Project</a>
            </div>
          </div>

          <!-- Shefa'y — ITI Graduation Project -->
          <div class="project-card project-card--featured reveal">
            <div class="project-img">
              <img src="assets/images/gallery/shefay-pharmacy.png" alt="Shefa'y — Smart Pharmacy System" loading="lazy">
              <div class="overlay">
                <a href="https://pharmacy-angular.vercel.app/" target="_blank" rel="noopener noreferrer" class="overlay-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
              </div>
            </div>
            <div class="project-body">
              <div class="project-meta">
                <span class="project-badge project-badge--iti"><i class="fas fa-graduation-cap"></i> ITI Graduation Project</span>
              </div>
              <h3>Shefa'y — Smart Pharmacy &amp; Drug Supply Chain System</h3>
              <p>A smart pharmacy management platform that connects pharmacies, pharmaceutical companies, doctors, delivery agents, and customers in one unified, transparent system. Solves the traditional problem of relying on manual phone calls to check drug availability — replacing it with a fully digital, real-time supply chain.</p>
              <ul class="project-features">
                <li>Central drug search across multiple suppliers with real-time availability and pricing</li>
                <li>Full order management between pharmacies and pharmaceutical companies</li>
                <li>Transparent rare medicine management</li>
                <li>Role-based access: Pharmacist / Company / Doctor / Customer / Delivery Agent</li>
                <li>Order tracking from creation to final delivery</li>
                <li>AI Assistant powered by RAG + Agents — query drugs, auto-create orders, analyze prescriptions</li>
                <li>Prescription verification preventing unauthorized drug ordering</li>
              </ul>
              <div class="project-tags">
                <span>Angular</span><span>ASP.NET Core</span><span>C#</span><span>SQL</span><span>AI / RAG</span><span>Agents</span><span>Full-Stack</span>
              </div>
              <a href="https://pharmacy-angular.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fas fa-arrow-right"></i> View Live Project</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    // 3D tilt effect on project cards
    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const ev = e as MouseEvent;
          const r = (card as HTMLElement).getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width - 0.5;
          const y = (ev.clientY - r.top) / r.height - 0.5;
          (card as HTMLElement).style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
          (card as HTMLElement).style.transform = '';
        });
      });
    }, 200);
  }
}
