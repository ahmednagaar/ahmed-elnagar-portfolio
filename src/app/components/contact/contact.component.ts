import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        
        <div class="contact-content">
          <p class="contact-intro">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div class="contact-methods">
            <a href="mailto:elnagarahmed031@gmail.com" class="contact-card glass-card">
              <div class="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>elnagarahmed031&#64;gmail.com</p>
            </a>
            
            <a href="https://linkedin.com/in/ahmed-elnagar" target="_blank" class="contact-card glass-card">
              <div class="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/ahmed-elnagar</p>
            </a>
            
            <div class="contact-card glass-card">
              <div class="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>01110439963</p>
            </div>
            
            <div class="contact-card glass-card">
              <div class="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--darker-bg);
    }
    
    .contact-content {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .contact-intro {
      text-align: center;
      font-size: 1.2rem;
      color: var(--gray-text);
      margin-bottom: 60px;
      line-height: 1.8;
    }
    
    .contact-methods {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    
    .contact-card {
      padding: 40px 30px;
      text-align: center;
      text-decoration: none;
      color: inherit;
      display: block;
    }
    
    .contact-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      background: var(--gradient-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .contact-card h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: var(--light-text);
    }
    
    .contact-card p {
      color: var(--gray-text);
      font-size: 0.95rem;
      word-break: break-word;
    }
    
    .contact-card:hover .contact-icon {
      transform: scale(1.1);
      transition: transform 0.3s ease;
    }
  `]
})
export class ContactComponent { }
