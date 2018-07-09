import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Metric,
  AnalyticsImplementation
} from './analytics-demo.interface';
import { AnalyticsService } from '../services/analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnalyticsService,
      useFactory() {

        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: [ ]
})
export class AnalyticsDemoModule { }
