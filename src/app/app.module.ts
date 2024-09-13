import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {ThemeServiceModule} from './services/theme-service/theme.service.module';
import { AppInitializerProvider } from './app-initializer.service';
import { NgxColorsModule } from 'ngx-colors';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
registerLocaleData(zh);

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  theme: {
    primaryColor: 'red'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzSelectModule,
    ThemeServiceModule,
    NgxColorsModule
  ],
  providers: [
    AppInitializerProvider,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_CONFIG, useValue:  ngZorroConfig  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
