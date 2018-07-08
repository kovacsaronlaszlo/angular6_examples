import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgNonBindableExampleComponent } from './ng-non-bindable-example/ng-non-bindable-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NgClassExampleComponent,
    NgForExampleComponent,
    NgNonBindableExampleComponent,
    NgStyleExampleComponent,
    NgSwitchExampleComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
