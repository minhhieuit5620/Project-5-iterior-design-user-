import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { FormatContentPipe } from './shared/format-content.pipe';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

//maps
// import { AgmCoreModule } from '@agm/core';
// import { google } from '@types/googlemaps';

// import { GoogleMapsAPIWrapper } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
    //toastr
    BrowserAnimationsModule, // required animations module
    //ToastrModule.forRoot(), // ToastrModule added
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    // ReactiveFormsModule,
    //maps
    // AgmCoreModule.forRoot({
    //   apiKey: "YOUR-GOOGLE-MAPS-API-KEY-HERE",
    //   libraries: ["places", "geometry"]
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
