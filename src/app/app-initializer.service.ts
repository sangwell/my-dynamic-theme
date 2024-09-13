import {APP_INITIALIZER} from '@angular/core';
import {ThemeService, ThemeType} from './services/theme-service/theme.service';

export const AppInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: (themeService: ThemeService) => () => {
    return themeService.loadTheme(ThemeType.default, true);
  },
  deps: [ThemeService],
  multi: true,
};
