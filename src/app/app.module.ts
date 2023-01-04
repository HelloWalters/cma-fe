import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { NewCampaignFormComponent } from './shared/components/forms/new-campaign-form/new-campaign-form.component';
import { CampaignDisplayListComponent } from './shared/modules/campaigns/campaign-list/campaign-display-list/campaign-display-list.component';
import { DefaultListComponent } from './shared/components/lists/default-list/default-list.component';
import { CurrentUserComponent } from './shared/components/users/current-user/current-user.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { HttpClientModule } from '@angular/common/http';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';

@NgModule({
  declarations: [
    AppComponent,
    NewCampaignFormComponent,
    CampaignDisplayListComponent,
    DefaultListComponent,
    CurrentUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
