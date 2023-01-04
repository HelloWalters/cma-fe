import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewCampaignFormComponent } from './shared/components/forms/new-campaign-form/new-campaign-form.component';
import { CampaignDisplayListComponent } from './shared/modules/campaigns/campaign-list/campaign-display-list/campaign-display-list.component';
import { DefaultListComponent } from './shared/components/lists/default-list/default-list.component';
import { CurrentUserComponent } from './shared/components/users/current-user/current-user.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';

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
