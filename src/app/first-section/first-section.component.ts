import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { WorkWithMeComponent } from '../core/components/work-with-me/work-with-me.component';

@Component({
  selector: 'app-first-section',
  imports: [FontAwesomeModule, CommonModule, WorkWithMeComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css',
})
export class FirstSectionComponent {
  techs = [
    'c',
    'cpp',
    'java',
    'python',
    'js',
    'html',
    'css',
    'sql',
    'springboot',
    'angular',
    'nodejs',
    'mongo',
    'firebase',
    'docker',
    'aws',
    'git',
    'github',
    'mysql',
    'postman',
  ];

  ngOnInit(): void {
    //   // Select all the cards
    //   const skillsSection = document.querySelector('.first-section'); // Get the skills-section element
    //   const cards = skillsSection!.querySelectorAll('.fade-in');
    //   // Create the intersection observer
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add('show');
    //           observer.unobserve(entry.target); // Remove observer once it is shown
    //         }
    //       });
    //     },
    //     {
    //       threshold: 0.1, // Trigger when 10% of the section is visible
    //     }
    //   );
    //   // Start observing each section
    //   cards.forEach((card) => {
    //     observer.observe(card);
    //   });
  }
}
