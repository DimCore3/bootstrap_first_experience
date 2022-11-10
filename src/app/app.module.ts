import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarNavigatorComponent } from './bar-navigator/bar-navigator.component';
import { BtCarouselComponent } from './bt-carousel/bt-carousel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BarNavigatorComponent,
    BtCarouselComponent,
    MainContentComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
