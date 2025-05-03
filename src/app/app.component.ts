import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
// import { CursorEffectDirective } from './core/directives/cursor-effect.directive';
import { FirstSectionComponent } from './first-section/first-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { ForthSectionComponent } from './forth-section/forth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { FooterComponent } from './core/components/footer/footer.component';
interface CustomHTMLDivElement extends HTMLDivElement {
  x: number;
  y: number;
}
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    ForthSectionComponent,
    FifthSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
