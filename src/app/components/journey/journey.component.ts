import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  template: `
    <section id="journey" class="section journey">
      <div class="container">
        <h2 class="section-title">My Journey</h2>
        
        <div class="journey-content">
          <div class="journey-intro">
            <p>
              Snapshots from my intensive training at ITI and my professional development journey.
              These moments represent the dedication, teamwork, and hands-on learning that shaped my career.
            </p>
          </div>
          
          <div class="featured-image-container">
            <div class="featured-image glass-card">
              <img src="/assets/images/gallery/working.jpg" alt="Working on code" loading="lazy">
              <div class="caption">
                <span class="caption-title">Deep Work Session</span>
                <span class="caption-subtitle">Building solutions with focus and passion</span>
              </div>
            </div>
          </div>

          <div class="gallery-grid">
            <div class="gallery-item glass-card" *ngFor="let img of galleryImages; let i = index">
              <img [src]="'/assets/images/gallery/' + img" [alt]="'Journey moment ' + (i+1)" loading="lazy">
              <div class="overlay">
                <span>ITI Journey</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .journey {
      background: var(--dark-bg);
      padding-bottom: 80px;
    }
    
    .journey-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 60px;
    }
    
    .journey-intro {
      text-align: center;
      max-width: 800px;
    }
    
    .journey-intro p {
      color: var(--gray-text);
      font-size: 1.1rem;
      line-height: 1.8;
    }
    
    .featured-image-container {
      width: 100%;
      max-width: 800px;
      margin-bottom: 40px;
    }
    
    .featured-image {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
      padding: 10px;
    }

    .featured-image img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      display: block;
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 25px;
      width: 100%;
    }

    .gallery-item {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      aspect-ratio: 4/3;
      cursor: pointer;
      padding: 8px;
      transition: all 0.3s ease;
    }
    
    .gallery-item:hover {
      transform: translateY(-5px);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      transition: transform 0.5s ease;
    }
    
    .gallery-item:hover img {
      transform: scale(1.1);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 10;
    }
    
    .gallery-item:hover .overlay {
      opacity: 1;
    }
    
    .overlay span {
      color: white;
      font-weight: 600;
      padding: 8px 16px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
    }

    .caption {
      position: absolute;
      bottom: 25px;
      left: 25px;
      right: 25px;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(10px);
      padding: 15px 25px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 20;
    }

    .caption-title {
      display: block;
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }
    
    .caption-subtitle {
      display: block;
      color: var(--gray-text);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
      }
    }
  `]
})
export class JourneyComponent {
  galleryImages = [
    'IMG_0554 (1).jpg',
    'IMG_0644 (1).jpg',
    'IMG_0653.jpg',
    'IMG_0695.jpg',
    'IMG_0720.jpg',
    'IMG_0893.jpg',
    'IMG_0947.jpg',
    'IMG_0998.jpg',
    'IMG_1017.jpg',
    'IMG_1070 (1).jpg',
    'IMG_1121.jpg',
    'IMG_1146.jpg'
  ];
}

