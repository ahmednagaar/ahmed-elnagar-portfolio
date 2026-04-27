import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-freelancing',
  imports: [CommonModule],
  template: `
    <section id="freelancing" class="freelancing-section">
      <div class="container">
        <div class="reveal" style="text-align:center;margin-bottom:48px">
          <span class="section-label"><span class="line"></span> Freelancing</span>
          <h2 class="section-title">💼 Freelancing Work</h2>
          <p class="section-desc" style="margin:0 auto">Completed client projects via <strong>Mostaql</strong> platform — delivering quality work with verified client reviews.</p>
        </div>

        <div class="freelancing-grid">

          <!-- Freelancing Job 1 — WordPress E-Commerce Store -->
          <div class="freelance-card reveal">
            <div class="freelance-header">
              <div class="freelance-status"><i class="fas fa-check-circle"></i> Completed</div>
              <div class="freelance-delivery"><i class="fas fa-clock"></i> Delivered in 1 Day</div>
            </div>
            <div class="freelance-body">
              <h3>WordPress Bilingual E-Commerce Store</h3>
              <div class="freelance-client"><i class="fas fa-user"></i> Abdulaziz H. — Saudi Arabia</div>
              <p>Built a fast, responsive bilingual (Arabic/English) e-commerce storefront using WordPress. Designed an attractive front-end layout and imported the client's full product catalog from an Excel file. Delivered the complete project within a single day with smooth performance and full mobile responsiveness.</p>
              <ul class="freelance-deliverables">
                <li>Bilingual storefront (Arabic RTL + English)</li>
                <li>Product catalog imported from Excel</li>
                <li>Attractive, mobile-responsive frontend design</li>
                <li>Delivered within 1 day</li>
              </ul>
              <div class="project-tags">
                <span>WordPress</span><span>WooCommerce</span><span>HTML</span><span>CSS</span><span>Excel Import</span>
              </div>
            </div>
            <div class="freelance-review">
              <div class="review-quote">
                <i class="fas fa-quote-left"></i>
                <p class="review-text-ar">"شكراً لك، كان عمل جيد فيما بيننا"</p>
                <div class="review-author">
                  <span>— Abdulaziz H., Saudi Arabia</span>
                  <span class="review-verified"><i class="fas fa-star"></i> Verified review on Mostaql</span>
                </div>
              </div>
            </div>
            <div class="freelance-footer">
              <a href="https://mostaql.com/project/1113765-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%85%D8%AA%D8%AC%D8%B1-%D8%B9%D9%86-%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D9%88%D9%88%D8%B1%D8%AF%D8%A8%D8%B1%D9%8A%D8%B3?deal_id=8918558" target="_blank" rel="noopener noreferrer" class="freelance-link">
                <i class="fas fa-external-link-alt"></i> View Project on Mostaql →
              </a>
            </div>
          </div>

          <!-- Freelancing Job 2 — WordPress Widget Design -->
          <div class="freelance-card reveal">
            <div class="freelance-header">
              <div class="freelance-status"><i class="fas fa-check-circle"></i> Completed</div>
            </div>
            <div class="freelance-body">
              <h3>WordPress Widget UI Enhancement</h3>
              <div class="freelance-client"><i class="fas fa-user"></i> Abdulrahman A.</div>
              <p>Refined and redesigned the WordPress widget layouts for a client's existing website using custom HTML, CSS, and JavaScript. Transformed a basic widget design into a dynamic, visually engaging interface that accurately reflects the website's character and content.</p>
              <ul class="freelance-deliverables">
                <li>Custom widget redesign using HTML, CSS, JS</li>
                <li>Dynamic, interactive widget layout</li>
                <li>Improved visual quality and user experience</li>
              </ul>
              <div class="project-tags">
                <span>WordPress</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>PHP</span>
              </div>
            </div>
            <div class="freelance-review">
              <div class="review-quote">
                <i class="fas fa-quote-left"></i>
                <p class="review-text-ar">"شخص محترف ومحترم وبإذن الله سوف أتعامل معه في المرات القادمة"</p>
                <p class="review-translation">"A professional and respectful person — God willing, I will work with him again"</p>
                <div class="review-author">
                  <span>— Abdulrahman A.</span>
                  <span class="review-verified"><i class="fas fa-star"></i> Verified review on Mostaql</span>
                </div>
              </div>
            </div>
            <div class="freelance-footer">
              <a href="https://mostaql.com/project/1100076-%D8%AA%D8%B9%D8%AF%D9%8A%D9%84-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D9%88%D8%AF%D8%AC%D8%A7%D8%AA-%D8%B9%D9%84%D9%89-%D9%85%D9%88%D9%82%D8%B9-%D9%88%D9%88%D8%B1%D8%AF%D8%A8%D8%B1%D9%8A%D8%B3?deal_id=8837409" target="_blank" rel="noopener noreferrer" class="freelance-link">
                <i class="fas fa-external-link-alt"></i> View Project on Mostaql →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FreelancingComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    // Subtle hover effect on freelance cards
    setTimeout(() => {
      document.querySelectorAll('.freelance-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const ev = e as MouseEvent;
          const r = (card as HTMLElement).getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width - 0.5;
          const y = (ev.clientY - r.top) / r.height - 0.5;
          (card as HTMLElement).style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
          (card as HTMLElement).style.transform = '';
        });
      });
    }, 200);
  }
}
