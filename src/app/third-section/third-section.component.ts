import { Component } from '@angular/core';
import { FolderComponent } from '../core/components/folder-component/folder.component';
import { CommonModule } from '@angular/common';
export interface Project {
  name: string;
  role: string;
  type: ProjectType;
  summary: string;
  techStack: string[];
  keyFeatures: string[];
  responsibilities: string;
  impact?: string;
  webLink?: string;
  playstoreLink?: string;
  mediaUrls: string[];
  mainColor: string;
  secondaryColor: string;
  foregroundColor: string;
}

export enum ProjectType {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  FULLSTACK = 'FULLSTACK',
}
@Component({
  selector: 'app-third-section',
  imports: [FolderComponent, CommonModule],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css',
})
export class ThirdSectionComponent {
  projects: Project[] = [
    {
      name: 'SmartGros – E-commerce Mobile App',
      role: 'Flutter Developer',
      type: ProjectType.MOBILE,
      summary:
        'A mobile app that connects wholesalers and retailers through a smooth product ordering experience.',
      techStack: ['Flutter'],
      keyFeatures: [
        'Retailers can browse wholesale product listings with ease.',
        'Order placement (without online payment).',
        'Responsive and intuitive UI for better usability.',
      ],
      responsibilities:
        'Built clean and responsive UIs in Flutter, ensured smooth navigation, and implemented core ordering flows.',
      impact: 'Successfully deployed to the Play Store',
      playstoreLink:
        'https://play.google.com/store/apps/details?id=tn.smartc.gros&hl=fr&pli=1',
      mediaUrls: ['/assets/images/smartgros 1.png'],
      mainColor: 'var(--white-text)',
      secondaryColor: '#1378D4',
      foregroundColor: 'var(--black-text)',
    },
    {
      name: 'VoyageQuest – Tourist Mobile App',
      role: 'Full Stack Flutter Developer Intern',
      type: ProjectType.MOBILE,
      summary:
        'A tourism app that showcases local businesses and allows users to make service reservations.',
      techStack: ['Flutter', 'Firebase', 'GetX'],
      keyFeatures: [
        'Displays categorized listings (hotels, restaurants, gyms, etc.).',
        'Includes smart filters and push notifications.',
        'Separates admin and user experiences with clear interfaces.',
      ],
      responsibilities:
        'Developed the entire app during my internship, integrating core features and managing state with GetX.',
      impact:
        'Delivered a scalable, professional-level tourism app during a 3-month internship.',
      mediaUrls: [
        '/assets/images/conv1.jpg',
        '/assets/images/conv2.jpg',
        '/assets/images/conv3.jpg',
        '/assets/images/conv4.jpg',
        '/assets/images/conv5.jpg',
        '/assets/images/conv6.jpg',
        '/assets/images/conv7.jpg',
        '/assets/images/conv1_light.jpg',
        '/assets/images/conv2_light.jpg',
        '/assets/images/conv3_light.jpg',
        '/assets/images/conv4_light.jpg',
        '/assets/images/conv5_light.jpg',
        '/assets/images/conv6_light.jpg',
        '/assets/images/conv7_light.jpg',
      ],
      mainColor: '#1C2838',
      secondaryColor: '#99D563',
      foregroundColor: 'var(--white-text)',
    },
    {
      name: 'NutriSolutions – Health-Focused Platform',
      role: 'Full Stack Web & Mobile Developer',
      type: ProjectType.WEB,
      summary:
        'A platform that promotes healthier lifestyles through nutrition tracking and personalized guidance.',
      techStack: ['Angular', 'NestJS', 'Flutter', 'Riverpod'],
      keyFeatures: [
        'Web dashboard for nutritionists to manage client profiles and meal plans.',
        'Mobile app for users to log meals and receive tailored recommendations.',
        'Real-time updates and a consistent experience across web and mobile.',
      ],
      responsibilities:
        'Built the web app using Angular and the mobile app in Flutter; developed the backend using NestJS; managed state with Riverpod.',
      impact:
        'Delivered a polished cross-platform app with real-world use cases for a university project.',
      mediaUrls: ['/assets/images/nutrisolutions-landing.png'],
      mainColor: '#FBF4EA',
      secondaryColor: '#CC5500',
      foregroundColor: '#232323',
    },
    {
      name: 'AWS 3-Tier Architecture',
      role: 'Student',
      type: ProjectType.WEB,
      summary:
        'Designed a scalable and highly available 3-tier architecture on AWS for a web application.',
      techStack: [
        'AWS EC2',
        'Auto Scaling',
        'RDS Multi-AZ',
        'Elastic Load Balancer',
      ],
      keyFeatures: [
        'Implemented Auto Scaling groups for both frontend and backend services.',
        'Used Elastic Load Balancer to distribute traffic evenly across instances.',
        'Set up a Bastion Host to securely manage access to instances in private subnets.',
      ],
      responsibilities:
        'Set up and configured EC2 instances with Auto Scaling, RDS Multi-AZ, and Elastic Load Balancer to ensure scalability and reliability.',
      impact:
        'Built a highly available, fault-tolerant, and scalable infrastructure for handling dynamic web traffic.',
      mediaUrls: [
        '/assets/images/aws_project.jpg',
        '/assets/images/aws_final.png',
      ],
      mainColor: '#232323',
      secondaryColor: '#FF9900',
      foregroundColor: '#FFFFFF',
    },
    {
      name: 'Google Solution Challenge | 2023 - 2024',
      role: 'Flutter Developer',
      type: ProjectType.MOBILE,
      summary:
        'Developed user-friendly and aesthetically pleasing interfaces for a mental health test app within 10 days.',
      techStack: ['Flutter', 'BLoC'],
      keyFeatures: [
        'Designed and implemented authentication and introduction screens.',
        'Developed initial user interfaces for the mental health test functionality.',
        'Used the BLoC pattern for state management, ensuring code scalability and ease of maintenance.',
      ],
      responsibilities:
        'Built visually appealing and functional user interfaces, managed state using BLoC, and implemented the meditation audio player.',
      impact:
        'Delivered a polished set of UI screens within a short timeline for a health-focused mental wellness app.',
      mediaUrls: [
        '/assets/images/brainpulse1.jpg',
        '/assets/images/brainpulse2.jpg',
        '/assets/images/brainpulse3.jpg',
        '/assets/images/brainpulse4.jpg',
        '/assets/images/brainpulse5.jpg',
        '/assets/images/brainpulse6.jpg',
        '/assets/images/brainpulse7.jpg',
        '/assets/images/brainpulse8.jpg',
        '/assets/images/brainpulse9.jpg',
        '/assets/images/brainpulse10.jpg',
        '/assets/images/brainpulse11.jpg',
        '/assets/images/brainpulse12.jpg',
      ],
      mainColor: '#4F3423',
      secondaryColor: '#9CB068',
      foregroundColor: '#FFFFFF',
    },
  ];
}
