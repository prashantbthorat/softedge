import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopPanelComponent } from './comman/top-panel/top-panel.component';
import { FooterComponent } from './comman/footer/footer.component';
import { LeftPanelComponent } from './comman/left-panel/left-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    FooterComponent,
    LeftPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
