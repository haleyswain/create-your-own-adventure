import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GlacierComponent } from './glacier/glacier.component';
import { YellowstoneComponent } from './yellowstone/yellowstone.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GlacierComponent,
    YellowstoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
