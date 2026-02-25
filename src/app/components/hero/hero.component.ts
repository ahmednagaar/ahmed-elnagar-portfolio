import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    imports: [CommonModule],
    template: `
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-text">
          <p class="greeting fade-in-up">Hi, I'm</p>
          <h1 class="name fade-in-up">Ahmed Elnagar</h1>
          <h2 class="title fade-in-up">
            <span class="typing-text">Full-Stack Developer</span>
          </h2>
          <p class="subtitle fade-in-up">
            Specializing in <span class="highlight">.NET</span> & <span class="highlight">Angular</span>
          </p>
          <p class="description fade-in-up">
            Building secure, scalable web applications with clean, efficient code and seamless integration
          </p>
          
          <div class="hero-buttons fade-in-up">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="#projects" class="btn btn-outline">View Projects</a>
          </div>
          
          <div class="social-links fade-in-up">
            <a href="https://linkedin.com/in/ahmed-elnagar" target="_blank" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/ahmed-elnagar" target="_blank" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:elnagarahmed031@gmail.com" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
    
    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: float 6s ease-in-out infinite;
    }
    
    .orb-1 {
      width: 500px;
      height: 500px;
      background: var(--gradient-1);
      top: -200px;
      right: -100px;
    }
    
    .orb-2 {
      width: 400px;
      height: 400px;
      background: var(--gradient-2);
      bottom: -150px;
      left: -100px;
      animation-delay: 2s;
    }
    
    .orb-3 {
      width: 300px;
      height: 300px;
      background: var(--gradient-3);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-delay: 4s;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    
    .greeting {
      font-size: 1.2rem;
      color: var(--gray-text);
      margin-bottom: 10px;
    }
    
    .name {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    .typing-text {
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .subtitle {
      font-size: 1.3rem;
      color: var(--gray-text);
      margin-bottom: 20px;
    }
    
    .highlight {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .description {
      font-size: 1.1rem;
      color: var(--gray-text);
      max-width: 600px;
      margin: 0 auto 40px;
      line-height: 1.8;
    }
    
    .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 40px;
    }
    
    .social-links {
      display: flex;
      gap: 20px;
      justify-content: center;
    }
    
    .social-link {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--card-bg);
      border-radius: 50%;
      color: var(--light-text);
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .social-link:hover {
      background: var(--primary-color);
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .mouse {
      width: 30px;
      height: 50px;
      border: 2px solid var(--primary-color);
      border-radius: 15px;
      position: relative;
    }
    
    .wheel {
      width: 4px;
      height: 10px;
      background: var(--primary-color);
      border-radius: 2px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 1.5s ease-in-out infinite;
    }
    
    @keyframes scroll {
      0%, 100% {
        top: 8px;
        opacity: 1;
      }
      50% {
        top: 25px;
        opacity: 0.5;
      }
    }
    
    @media (max-width: 768px) {
      .name {
        font-size: 2.5rem;
      }
      
      .title {
        font-size: 1.8rem;
      }
      
      .subtitle {
        font-size: 1.1rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .hero-buttons .btn {
        width: 200px;
      }
    }
  `]
})
export class HeroComponent { }
