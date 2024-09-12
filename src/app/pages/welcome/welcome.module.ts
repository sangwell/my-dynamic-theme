import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    NzStepsModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzTreeModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
