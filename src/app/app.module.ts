import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedService } from './modules/shared/services/shared.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyDataPostComponent } from './components/my-data-post/my-data-post.component'
import { CommonInterceptor } from './interceptors/common.interceptor';
import { ShowDataPipe } from './Pipes/show-data.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    NotFoundComponent,
    MyDataPostComponent,
    ShowDataPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [
    SharedService,
    { provide : HTTP_INTERCEPTORS, useClass : CommonInterceptor, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
