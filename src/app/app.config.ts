import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './Product-store/product.effects';
import { provideStore } from '@ngrx/store';
import { productReducer } from './Product-store/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideHttpClient(),
  provideEffects([ProductEffects]), provideStore({product:productReducer}),
  ]
};
