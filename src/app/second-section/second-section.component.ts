import { Component } from '@angular/core';

@Component({
  selector: 'app-second-section',
  imports: [],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css',
})
export class SecondSectionComponent {
  // ngOnInit(): void {
  //   // Select all the cards
  //   const skillsSection = document.querySelector('.skills-section'); // Get the skills-section element
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
  // }
}
