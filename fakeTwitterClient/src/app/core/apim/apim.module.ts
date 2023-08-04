import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApimConfigurationsService } from './apim-configurations.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpApimInterceptor } from './apim.interceptor';
import { ApimConfig } from './apim-config.model';


@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ]
  })
  export class Igb2bApimModule {
    
    constructor(@Optional() @SkipSelf() parentModule: Igb2bApimModule) {
      if (parentModule) {
        throw new Error(
          'Igb2bApimModule is already loaded. Import it in the AppModule only');
      }
    }
  
    public static forRoot(apimConfig: ApimConfig): ModuleWithProviders<Igb2bApimModule> {
      return {
        ngModule: Igb2bApimModule,
        providers: [
          ApimConfigurationsService,
          {
            provide: 'apimConfig',
            useValue: apimConfig
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpApimInterceptor,
            multi: true
          }
        ]
      };
    }
  }
  