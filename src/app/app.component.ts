import {Component} from '@angular/core';
import {ThemeService, ThemeType} from './services/theme-service/theme.service';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;

  leftColor: string = '';

  constructor(private themeService: ThemeService,
              private nzConfigService: NzConfigService) {
  }


  onThemeChange(theme: ThemeType) {
    this.themeService.toggleTheme(theme).then();
  }

  colorChange(color: string) {
    console.log('color', color);
    this.nzConfigService.set('theme', { primaryColor: color })
  }
}
