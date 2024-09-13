import {Component} from '@angular/core';
import {ThemeService, ThemeType} from './services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;

  leftColor: string = '';

  constructor(private themeService: ThemeService) {
  }


  onThemeChange(theme: ThemeType) {
    this.themeService.toggleTheme(theme).then();
  }

  colorChange(color: string) {
    console.log('color', color);
  }
}
