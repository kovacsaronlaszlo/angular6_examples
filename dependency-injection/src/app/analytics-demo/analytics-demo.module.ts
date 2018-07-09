import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Metric,
  AnalyticsImplementation
} from './analytics-demo.interface';
import { AnalyticsService } from '../services/analytics.service';

import {
  HttpModule,
  Http
} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://devserver.hu' },
    {
      provide: AnalyticsService,
      deps: [ Http, 'API_URL' ],
      useFactory(http: Http, apiUrl: string) {

        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
            console.log('Sending to: ', apiUrl);
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    },
  ],
  declarations: [ ]
})
export class AnalyticsDemoModule { }
