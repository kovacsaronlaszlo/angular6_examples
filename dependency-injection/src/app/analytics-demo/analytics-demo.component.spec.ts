import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpModule,
  Http
} from '@angular/http';

import { AnalyticsDemoComponent } from './analytics-demo.component';
import {
  Metric,
  AnalyticsImplementation
} from './analytics-demo.interface';
import { AnalyticsService } from '../services/analytics.service';

describe('AnalyticsDemoComponent', () => {
  let component: AnalyticsDemoComponent;
  let fixture: ComponentFixture<AnalyticsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ AnalyticsDemoComponent ],
      providers: [
        { provide: 'API_URL', useValue: 'http://devserver.com' },
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
