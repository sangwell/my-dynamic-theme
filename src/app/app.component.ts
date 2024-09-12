import {Component} from '@angular/core';
import {ThemeService} from './services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private themeService: ThemeService) {
  }

  toggleTheme(theme: string): void {
    this.themeService.toggleTheme(theme).then();
  }
}
