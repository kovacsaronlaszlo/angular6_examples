import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

// Our models
import { ExampleDef } from './example.model';

// App harness components
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';

// Demo Modules
import { TemplatesModule } from './templates/templates.module';
import { StylingModule } from './styling/styling.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { TabsModule } from './tabs/tabs.module';
import { HostModule } from './host/host.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';

// Individual Demos
import { StylingDemoComponent } from './styling/styling-demo/styling-demo.component';
import { NgBookIfDemoComponent } from './templates/ng-book-if/ng-book-if-demo.component';
import { NgBookForDemoComponent } from './templates/ng-book-for/ng-book-for-demo.component';
import { ObservablesDemoComponent } from './change-detection/observables-demo/observables-demo.component';
import { OnPushDemoComponent } from './change-detection/on-push-demo/on-push-demo.component';
import { ContentProjectionDemoComponent } from './content-projection/content-projection-demo/content-projection-demo.component';
import { ContentTabsDemoComponent } from './tabs/content-tabs-demo/content-tabs-demo.component';
import { PopupDemoComponent } from './host/popup-demo/popup-demo.component';
import { PopupDemoComponent1 } from './host/popup-demo/steps/host-1';
import { PopupDemoComponent2 } from './host/popup-demo/steps/host-2';
import { PopupDemoComponent3 } from './host/popup-demo/steps/host-3';
import { PopupDemoComponent4 } from './host/popup-demo/steps/host-4';
import { OnInitDemoComponent } from './lifecycle/on-init/on-init-demo.component';
import { OnChangesDemoComponent } from './lifecycle/on-changes/on-changes-demo.component';
import { DiffersDemoComponent } from './lifecycle/differs/differs-demo.component';
import { AllHooksDemoComponent } from './lifecycle/all-hooks/all-hooks-demo.component';

/**
 * a pélkdák listája amit a fejezet tartalmaz
 * @type {({label: string; name: string; path: string; component: IntroComponent} | {label: string; name: string; path: string; component: StylingDemoComponent} | {label: string; name: string; path: string; component: PopupDemoComponent1; dev: boolean} | {label: string; name: string; path: string; component: PopupDemoComponent2; dev: boolean} | {label: string; name: string; path: string; component: PopupDemoComponent3; dev: boolean} | {label: string; name: string; path: string; component: PopupDemoComponent4; dev: boolean} | {label: string; name: string; path: string; component: PopupDemoComponent} | {label: string; name: string; path: string; component: ContentTabsDemoComponent} | {label: string; name: string; path: string; component: OnInitDemoComponent} | {label: string; name: string; path: string; component: OnChangesDemoComponent} | {label: string; name: string; path: string; component: DiffersDemoComponent} | {label: string; name: string; path: string; component: AllHooksDemoComponent} | {label: string; name: string; path: string; component: NgBookForDemoComponent} | {label: string; name: string; path: string; component: NgBookIfDemoComponent} | {label: string; name: string; path: string; component: ContentProjectionDemoComponent} | {label: string; name: string; path: string; component: OnPushDemoComponent} | {label: string; name: string; path: string; component: ObservablesDemoComponent})[]}
 */
const examples: ExampleDef[] = [ /* tslint:disable:max-line-length */
  {label: 'Intro',                            name: 'Root',                       path: '',                       component: IntroComponent},
  {label: 'Styling',                          name: 'Styling',                    path: 'styling',                component: StylingDemoComponent },
  {label: 'Modifying the Host (Step 1)',      name: 'Host1',                      path: 'host-step-1',            component: PopupDemoComponent1, dev: true},
  {label: 'Modifying the Host (Step 2)',      name: 'Host2',                      path: 'host-step-2',            component: PopupDemoComponent2, dev: true},
  {label: 'Modifying the Host (Step 3)',      name: 'Host3',                      path: 'host-step-3',            component: PopupDemoComponent3, dev: true},
  {label: 'Modifying the Host (Step 4)',      name: 'Host4',                      path: 'host-step-4',            component: PopupDemoComponent4, dev: true},
  {label: 'Popup - Modifying the Host',       name: 'Host',                       path: 'host-final',             component: PopupDemoComponent},
  {label: 'Tabs - Component Querying',        name: 'Tabs',                       path: 'tabs',                   component: ContentTabsDemoComponent},
  {label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1',                 path: 'lifecycle-hooks-1',      component: OnInitDemoComponent },
  {label: 'Lifecycle 2 - OnChanges',          name: 'Lifecycle2',                 path: 'lifecycle-hooks-2',      component: OnChangesDemoComponent },
  {label: 'Lifecycle 3 - Differs',            name: 'Lifecycle3',                 path: 'lifecycle-hooks-3',      component: DiffersDemoComponent },
  {label: 'Lifecycle 4 - All Hooks',          name: 'Lifecycle4',                 path: 'lifecycle-hooks-4',      component: AllHooksDemoComponent },
  {label: 'ngBookFor',                        name: 'NgBookFor',                  path: 'ng-book-for',            component: NgBookForDemoComponent },
  {label: 'ngBookIf',                         name: 'NgBookIf',                   path: 'ng-book-if',             component: NgBookIfDemoComponent },
  {label: 'Content Projection',               name: 'ContentProjection',          path: 'content-projection',     component: ContentProjectionDemoComponent },
  {label: 'Change Detection - OnPush',        name: 'ChangeDetectionOnPush',      path: 'change-detection-onpush', component: OnPushDemoComponent },
  {label: 'Change Detection - Observables',   name: 'ChangeDetectionObservables', path: 'change-detection-observ', component: ObservablesDemoComponent },
]; /* tslint:enable:max-line-length */


/**
 * útvonalak
 * @type {({path: string; component: IntroComponent; pathMatch: string} | {path: string; component: StylingDemoComponent; pathMatch: string} | {path: string; component: NgBookIfDemoComponent; pathMatch: string} | {path: string; component: NgBookForDemoComponent; pathMatch: string} | {path: string; component: OnPushDemoComponent; pathMatch: string} | {path: string; component: ObservablesDemoComponent; pathMatch: string} | {path: string; component: ContentProjectionDemoComponent; pathMatch: string} | {path: string; component: ContentTabsDemoComponent; pathMatch: string} | {path: string; component: PopupDemoComponent; pathMatch: string} | {path: string; component: PopupDemoComponent1; pathMatch: string} | {path: string; component: PopupDemoComponent2; pathMatch: string} | {path: string; component: PopupDemoComponent3; pathMatch: string} | {path: string; component: PopupDemoComponent4; pathMatch: string} | {path: string; component: OnInitDemoComponent; pathMatch: string} | {path: string; component: OnChangesDemoComponent; pathMatch: string} | {path: string; component: DiffersDemoComponent; pathMatch: string} | {path: string; component: AllHooksDemoComponent; pathMatch: string})[]}
 */
const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'styling', component: StylingDemoComponent, pathMatch: 'full' },
  { path: 'ng-book-if', component: NgBookIfDemoComponent, pathMatch: 'full' },
  { path: 'ng-book-for', component: NgBookForDemoComponent, pathMatch: 'full' },
  { path: 'change-detection-onpush', component: OnPushDemoComponent, pathMatch: 'full' },
  { path: 'change-detection-observ', component: ObservablesDemoComponent, pathMatch: 'full' },
  { path: 'content-projection', component: ContentProjectionDemoComponent, pathMatch: 'full' },
  { path: 'tabs', component: ContentTabsDemoComponent, pathMatch: 'full' },
  { path: 'host-final', component: PopupDemoComponent, pathMatch: 'full' },
  { path: 'host-step-1', component: PopupDemoComponent1, pathMatch: 'full' },
  { path: 'host-step-2', component: PopupDemoComponent2, pathMatch: 'full' },
  { path: 'host-step-3', component: PopupDemoComponent3, pathMatch: 'full' },
  { path: 'host-step-4', component: PopupDemoComponent4, pathMatch: 'full' },
  { path: 'lifecycle-hooks-1', component: OnInitDemoComponent, pathMatch: 'full' },
  { path: 'lifecycle-hooks-2', component: OnChangesDemoComponent, pathMatch: 'full' },
  { path: 'lifecycle-hooks-3', component: DiffersDemoComponent, pathMatch: 'full' },
  { path: 'lifecycle-hooks-4', component: AllHooksDemoComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    TemplatesModule,
    StylingModule,
    ChangeDetectionModule,
    ContentProjectionModule,
    TabsModule,
    HostModule,
    LifecycleModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs',    useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
