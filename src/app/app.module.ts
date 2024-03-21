import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AddBookComponent } from "./add-book/add-book.component";
import { AddReaderComponent } from "./add-reader/add-reader.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { EditReaderComponent } from "./edit-reader/edit-reader.component";
import { BookTrackerErrorHandlerService } from "./core/book-tracker-error-handler.service";
import { AddHeaderInterceptorService } from "./core/add-header-interceptor.service";
import { LogResponseInterceptorService } from "./core/log-response-interceptor.service";
import { CacheInterceptorService } from "./core/cache-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptorService,
      multi: true,
    },
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
