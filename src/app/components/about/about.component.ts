import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        
        <div class="about-content">
          <div class="profile-image-container">
            <div class="profile-blob"></div>
            <img src="/assets/images/profile.jpg" alt="Ahmed Elnagar" class="profile-img">
          </div>

          <div class="about-text">
            <p class="intro">
              Full Stack Developer specializing in the .NET ecosystem with experience in Angular for front-end development.
            </p>
            <p>
              Skilled in building <span class="highlight">secure, scalable web applications</span> using ASP.NET Core, C#, Angular, and SQL Server. 
              Passionate about clean, efficient code and seamless front-end & back-end integration.
            </p>
            <p>
              Strong problem-solving, teamwork, and communication skills with a focus on delivering high-quality solutions.
            </p>
            
            <div class="stats">
              <div class="stat-item glass-card">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div class="stat-item glass-card">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div class="stat-item glass-card">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--dark-bg);
    }
    
    .about-content {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 50px;
    }
    
    .profile-image-container {
      position: relative;
      width: 300px;
      height: 300px;
      flex-shrink: 0;
    }
    
    .profile-blob {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--gradient-1);
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
      animation: morph 6s ease-in-out infinite;
      opacity: 0.2;
      z-index: 0;
    }
    
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      position: relative;
      z-index: 1;
      border: 4px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      transition: all 0.5s ease;
    }
    
    .profile-img:hover {
      border-radius: 50%;
      transform: scale(1.05);
    }
    
    @keyframes morph {
      0%, 100% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
      }
      33% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
      }
      66% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      }
    }
    
    .about-text {
      text-align: left;
    }
    
    @media (max-width: 768px) {
      .about-content {
        flex-direction: column;
        text-align: center;
      }
      
      .about-text {
        text-align: center;
      }
      
      .profile-image-container {
        width: 250px;
        height: 250px;
      }
    }

    .intro {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--light-text);
      margin-bottom: 20px;
    }
    
    .about-text p {
      font-size: 1.1rem;
      color: var(--gray-text);
      margin-bottom: 15px;
      line-height: 1.8;
    }
    
    .highlight {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    
    .stat-item {
      text-align: center;
      padding: 30px;
    }
    
    .stat-item h3 {
      font-size: 2.5rem;
      font-weight: 700;
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 10px;
    }
    
    .stat-item p {
      color: var(--gray-text);
      font-size: 1rem;
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .stats {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent { }
