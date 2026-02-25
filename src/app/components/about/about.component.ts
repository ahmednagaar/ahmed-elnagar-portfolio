import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-img-wrap reveal-left">
            <img src="assets/images/gallery/IMG_0947.jpg" alt="Ahmed Elnagar" loading="lazy">
            <div class="about-img-accent"></div>
          </div>
          <div class="about-text reveal-right">
            <span class="section-label"><span class="line"></span> About Me</span>
            <h2 class="section-title">Crafting Digital Experiences</h2>
            <p class="lead">Full Stack Developer specializing in the .NET ecosystem with experience in Angular for front-end development.</p>
            <p>Skilled in building <span class="highlight">secure, scalable web applications</span> using ASP.NET Core, C#, Angular, and SQL Server. Passionate about clean, efficient code and seamless front-end &amp; back-end integration.</p>
            <p>Strong problem-solving, teamwork, and communication skills with a focus on delivering high-quality solutions.</p>
            <div class="stats-row">
              <div class="stat">
                <h3 [attr.data-count]="2" data-suffix="+">0+</h3>
                <p>Years Experience</p>
              </div>
              <div class="stat">
                <h3 [attr.data-count]="10" data-suffix="+">0+</h3>
                <p>Projects Done</p>
              </div>
              <div class="stat">
                <h3 [attr.data-count]="100" data-suffix="%">0%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    const counters = document.querySelectorAll('[data-count]');
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = +(el.dataset['count'] || 0);
        const suffix = el.dataset['suffix'] || '';
        const duration = 1200;
        const startTime = performance.now();
        function animate(now: number) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));
  }
}
