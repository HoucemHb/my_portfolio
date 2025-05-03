import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AppUtils } from '../../utils/utils';
import { Project } from '../../../third-section/third-section.component';
import { CommonModule } from '@angular/common';
import { MacframeComponent } from '../macframe/macframe.component';
import { AndroidframeComponent } from '../androidframe/androidframe.component';

@Component({
  selector: 'app-folder',
  imports: [CommonModule, MacframeComponent, AndroidframeComponent],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css',
})
export class FolderComponent {
  @Input() mainColor: string = AppUtils.getCssVariable('--white-text');
  @Input() secondaryColor: string = AppUtils.getCssVariable('--black-text');
  @Input() foregroundColor: string = AppUtils.getCssVariable('--black-text');
  @Input({ required: true }) project!: Project;
  @Input() index: number = 0;

  isDesktop: boolean = true;

  ngOnInit() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize.bind(this));
  }

  updateScreenSize() {
    this.isDesktop = window.innerWidth > 768; // Set this to mobile width (adjust as needed)
    console.log(this.isDesktop);
  }
}
