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
}
