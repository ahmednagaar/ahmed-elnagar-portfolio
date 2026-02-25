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
        <div class="projects-grid">
          <div class="project-card reveal">
            <div class="project-img"><img src="assets/images/gallery/IMG_0998.jpg" alt="E-Commerce Platform" loading="lazy">
              <div class="overlay"></div>
            </div>
            <div class="project-body">
              <h3>E-Commerce Platform</h3>
              <p>Bilingual WordPress storefront with Excel integration — delivered in 3 days.</p>
              <div class="project-tags"><span>WordPress</span><span>PHP</span><span>CSS</span></div>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img"><img src="assets/images/gallery/IMG_1017.jpg" alt="Full-Stack Web Apps" loading="lazy">
              <div class="overlay"></div>
            </div>
            <div class="project-body">
              <h3>Full-Stack Web Applications</h3>
              <p>Built with ASP.NET Core and Angular — secure, scalable solutions.</p>
              <div class="project-tags"><span>ASP.NET Core</span><span>Angular</span><span>SQL Server</span></div>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img"><img src="assets/images/gallery/IMG_1121.jpg" alt="UI/UX Enhancements" loading="lazy">
              <div class="overlay"></div>
            </div>
            <div class="project-body">
              <h3>UI/UX Enhancements</h3>
              <p>Custom widget designs and responsive layouts with refined visual consistency.</p>
              <div class="project-tags"><span>HTML5</span><span>CSS3</span><span>JavaScript</span></div>
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
