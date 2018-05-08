import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/side/sidebar/sidebar.component';
import { AdsListItemComponent } from './components/side/ads-list-item/ads-list-item.component';
import { MapComponent } from './components/navigation/map/map.component';
import { AdPopupComponent } from './components/navigation/ad-popup/ad-popup.component';

//Services
import { UbimoAdDispatcherService } from './services/ubimo-ad-dispatcher.service';
import { AdsExchangeService } from './services/ads-exchange.service';

import { AdsTypeComponent } from './components/side/ads-type/ads-type.component';
import { AdsStartFilterPipe } from './pipes/ads-start-filter.pipe';
import { AdsEndFilterPipe } from './pipes/ads-end-filter.pipe';
import { ArrayReversePipe } from './pipes/array-reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdsListItemComponent,
    MapComponent,
    AdPopupComponent,
    AdsTypeComponent,
    AdsStartFilterPipe,
    AdsEndFilterPipe,
    ArrayReversePipe
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	AngularFontAwesomeModule
  ],
  providers: [
	  UbimoAdDispatcherService,
	  AdsExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
