import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewCampaignFormComponent } from './shared/components/forms/new-campaign-form/new-campaign-form.component';
import { CampaignDisplayListComponent } from './shared/modules/campaigns/campaign-list/campaign-display-list/campaign-display-list.component';
import { DefaultListComponent } from './shared/components/lists/default-list/default-list.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewCampaignFormComponent,
    CampaignDisplayListComponent,
    DefaultListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
