// removed ApplicationConfig import for compatibility with older Angular toolchain
import { provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { importProvidersFrom } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { routes } from "./app.routes";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";
import { LoadingInterceptor } from "./core/interceptors/loading.interceptor";
import { MockBackendInterceptor } from "./core/interceptors/mock-backend.interceptor";

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MatSnackBarModule),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockBackendInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: "pt-BR",
    },
  ],
};
